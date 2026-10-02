const USGS_URL = 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson';
const EONET_URL = 'https://eonet.gsfc.nasa.gov/api/v3/events?status=open&limit=100';
const OPEN_METEO_URL = 'https://api.open-meteo.com/v1/forecast';
const GEOCODE_URL = 'https://geocoding-api.open-meteo.com/v1/search';

async function getJSON(url, timeout = 12000) {
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(url, {
      signal: controller.signal,
      headers: { Accept: 'application/json' },
      cache: 'no-store'
    });
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    return await response.json();
  } finally {
    clearTimeout(timer);
  }
}

export async function fetchEarthquakes() {
  const data = await getJSON(USGS_URL);
  return (data.features || []).slice(0, 120).map((feature) => {
    const p = feature.properties || {};
    const c = feature.geometry?.coordinates || [];
    return {
      id: `usgs-${feature.id}`,
      source: 'USGS',
      sourceUrl: p.url || 'https://earthquake.usgs.gov/',
      type: 'earthquake',
      title: p.place || 'Earthquake',
      subtitle: p.title || p.place || 'USGS earthquake event',
      lat: Number(c[1]),
      lon: Number(c[0]),
      depth: Number(c[2]),
      magnitude: Number.isFinite(p.mag) ? p.mag : null,
      time: p.time ? new Date(p.time).toISOString() : null,
      severity: Number.isFinite(p.mag) ? p.mag : 1
    };
  }).filter((e) => Number.isFinite(e.lat) && Number.isFinite(e.lon));
}

function eonetType(event) {
  const text = (event.categories || []).map((c) => c.title).join(' ').toLowerCase();
  if (/wildfire|fire/.test(text)) return 'wildfire';
  if (/severe storm|storm|cyclone/.test(text)) return 'storm';
  if (/volcano/.test(text)) return 'volcano';
  if (/flood/.test(text)) return 'flood';
  return 'other';
}

export async function fetchNaturalEvents() {
  const data = await getJSON(EONET_URL);
  return (data.events || []).map((event) => {
    const geometry = Array.isArray(event.geometry) ? event.geometry[event.geometry.length - 1] : null;
    if (!geometry || geometry.type !== 'Point' || !Array.isArray(geometry.coordinates)) return null;
    const [lon, lat] = geometry.coordinates;
    const type = eonetType(event);
    const category = event.categories?.[0]?.title || 'Natural event';
    return {
      id: `eonet-${event.id}`,
      source: 'NASA EONET',
      sourceUrl: event.link || 'https://eonet.gsfc.nasa.gov/',
      type,
      title: event.title || category,
      subtitle: category,
      lat: Number(lat),
      lon: Number(lon),
      depth: null,
      magnitude: null,
      time: geometry.date || null,
      severity: type === 'wildfire' ? 2.2 : type === 'storm' ? 2.5 : 1.8
    };
  }).filter(Boolean).filter((e) => Number.isFinite(e.lat) && Number.isFinite(e.lon));
}

export async function fetchAllEvents() {
  const settled = await Promise.allSettled([fetchEarthquakes(), fetchNaturalEvents()]);
  const earthquakes = settled[0].status === 'fulfilled' ? settled[0].value : [];
  const natural = settled[1].status === 'fulfilled' ? settled[1].value : [];
  const errors = settled.filter((x) => x.status === 'rejected').map((x) => x.reason?.message || 'Data source unavailable');
  return {
    events: [...earthquakes, ...natural].sort((a,b) => new Date(b.time || 0) - new Date(a.time || 0)),
    earthquakes,
    natural,
    errors
  };
}

export async function fetchWeather(lat, lon) {
  const params = new URLSearchParams({
    latitude: Number(lat).toFixed(4),
    longitude: Number(lon).toFixed(4),
    current: 'temperature_2m,apparent_temperature,weather_code,wind_speed_10m,relative_humidity_2m,precipitation',
    timezone: 'auto'
  });
  return await getJSON(`${OPEN_METEO_URL}?${params}`);
}

export async function searchLocation(query) {
  const params = new URLSearchParams({
    name: query,
    count: '1',
    language: 'en',
    format: 'json'
  });
  const data = await getJSON(`${GEOCODE_URL}?${params}`);
  const item = data.results?.[0];
  if (!item) return null;
  return {
    name: item.name,
    admin1: item.admin1 || '',
    country: item.country || '',
    lat: item.latitude,
    lon: item.longitude
  };
}
