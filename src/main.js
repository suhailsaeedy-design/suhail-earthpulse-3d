import { EarthSpaceScene } from './scene.js';
import { fetchAllEvents, fetchWeather, searchLocation } from './api.js';
import { FEATURED_STARS, PLANETS, EVENT_CSS_COLORS, formatCoord, relativeTime, weatherCodeLabel } from './data.js';

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const state = {
  mode: 'earth',
  filter: 'all',
  events: [],
  theme: localStorage.getItem('earthpulse-theme') || (matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark')
};

const els = {
  body: document.body,
  canvas: $('#spaceCanvas'),
  boot: $('#bootScreen'),
  toast: $('#toast'),
  theme: $('#themeToggle'),
  share: $('#shareButton'),
  searchForm: $('#locationSearch'),
  searchInput: $('#searchInput'),
  quakeCount: $('#quakeCount'),
  fireCount: $('#fireCount'),
  stormCount: $('#stormCount'),
  dataStatus: $('#dataStatus'),
  eventList: $('#eventList'),
  explorer: $('#explorerPanel'),
  detail: $('#detailCard'),
  detailType: $('#detailType'),
  detailTitle: $('#detailTitle'),
  detailSubtitle: $('#detailSubtitle'),
  detailGrid: $('#detailGrid'),
  detailSource: $('#detailSource'),
  weather: $('#weatherCard'),
  weatherPlace: $('#weatherPlace'),
  weatherCondition: $('#weatherCondition'),
  weatherTemp: $('#weatherTemp'),
  weatherStats: $('#weatherStats'),
  weatherCoords: $('#weatherCoords'),
  starCard: $('#starCard'),
  starName: $('#starName'),
  starSubtitle: $('#starSubtitle'),
  starFacts: $('#starFacts'),
  starPicker: $('#starPicker'),
  planetCard: $('#planetCard'),
  planetName: $('#planetName'),
  planetSubtitle: $('#planetSubtitle'),
  planetFacts: $('#planetFacts'),
  planetPicker: $('#planetPicker'),
  mobileEventCount: $('#mobileEventCount'),
  hintText: $('#hintText')
};

const scene = new EarthSpaceScene(els.canvas);

function toast(message, duration=2600) {
  els.toast.textContent = message;
  els.toast.classList.add('visible');
  clearTimeout(toast.timer);
  toast.timer=setTimeout(()=>els.toast.classList.remove('visible'),duration);
}

async function shareEarthPulse() {
  const shareData = {
    title: 'EarthPulse 3D — Suhail Labs',
    text: 'Explore live Earth events, weather, the Solar System and an interactive galaxy in EarthPulse 3D.',
    url: 'https://suhail-earthpulse-3d.onrender.com'
  };
  try {
    if (navigator.share) {
      await navigator.share(shareData);
      return;
    }
    await navigator.clipboard.writeText(shareData.url);
    toast('EarthPulse link copied.');
  } catch (error) {
    if (error?.name !== 'AbortError') {
      try {
        await navigator.clipboard.writeText(shareData.url);
        toast('EarthPulse link copied.');
      } catch {
        toast('Share is unavailable in this browser.');
      }
    }
  }
}

function setTheme(theme) {
  state.theme=theme;
  els.body.dataset.theme=theme;
  scene.setTheme(theme);
  localStorage.setItem('earthpulse-theme',theme);
}

function setMode(mode) {
  state.mode=mode;
  els.body.dataset.mode=mode;
  $$('.mode-btn').forEach(btn=>btn.classList.toggle('active',btn.dataset.mode===mode));
  scene.setMode(mode);
  els.detail.classList.remove('visible');
  els.detail.setAttribute('aria-hidden','true');
  els.weather.classList.remove('visible');
  els.weather.setAttribute('aria-hidden','true');
  els.starCard.classList.remove('visible');
  els.starCard.setAttribute('aria-hidden','true');
  els.planetCard?.classList.remove('visible');
  els.planetCard?.setAttribute('aria-hidden','true');

  if(mode==='earth') els.hintText.textContent='Drag to orbit · Scroll or pinch to zoom';
  if(mode==='events') els.hintText.textContent='Select a marker or event card to inspect it';
  if(mode==='weather') {
    els.hintText.textContent='Tap anywhere on Earth for live local weather';
    toast('Weather mode: tap the globe or search a place.');
  }
  if(mode==='system') {
    els.hintText.textContent='Select a planet to fly in for a close-up';
    renderPlanetPicker();
  }
  if(mode==='space') {
    renderStarPicker();
    setTimeout(()=>focusStar(FEATURED_STARS[0].id),600);
  }
}

function counts() {
  const earthquakes=state.events.filter(e=>e.type==='earthquake').length;
  const fires=state.events.filter(e=>e.type==='wildfire').length;
  const storms=state.events.filter(e=>e.type==='storm').length;
  els.quakeCount.textContent=earthquakes.toLocaleString();
  els.fireCount.textContent=fires.toLocaleString();
  els.stormCount.textContent=storms.toLocaleString();
  els.mobileEventCount.textContent=state.events.length.toLocaleString();
}

function filteredEvents() {
  if(state.filter==='all') return state.events;
  return state.events.filter(e=>e.type===state.filter);
}

function renderEvents() {
  const list=filteredEvents().slice(0,70);
  if(!list.length) {
    els.eventList.innerHTML='<div class="empty-state">No current events were returned for this filter. EarthPulse never invents live events.</div>';
    return;
  }
  els.eventList.innerHTML=list.map((e)=>{
    const metric=e.type==='earthquake' && e.magnitude!=null ? `M${Number(e.magnitude).toFixed(1)} · ` : '';
    return `<button class="event-card" type="button" data-event-id="${e.id}">
      <span class="event-dot ${e.type}"></span>
      <span><strong>${escapeHtml(e.title)}</strong><small>${metric}${escapeHtml(e.subtitle || e.source)}</small></span>
      <time>${relativeTime(e.time)}</time>
    </button>`;
  }).join('');

  $$('.event-card').forEach(btn=>btn.addEventListener('click',()=>{
    const event=state.events.find(x=>x.id===btn.dataset.eventId);
    if(event) selectEvent(event);
  }));
}

function selectEvent(event) {
  scene.focusEvent(event);
  const label=event.type==='earthquake' ? 'EARTHQUAKE · USGS' : `${event.type.toUpperCase()} · ${event.source}`;
  els.detailType.textContent=label;
  els.detailType.style.color=EVENT_CSS_COLORS[event.type] || EVENT_CSS_COLORS.other;
  els.detailTitle.textContent=event.title;
  els.detailSubtitle.textContent=event.subtitle || 'Live natural event';
  const mag=event.magnitude!=null ? Number(event.magnitude).toFixed(1) : '—';
  const depth=event.depth!=null ? `${Number(event.depth).toFixed(1)} km` : '—';
  els.detailGrid.innerHTML=`
    <div><small>MAGNITUDE</small><strong>${mag}</strong></div>
    <div><small>DEPTH</small><strong>${depth}</strong></div>
    <div><small>UPDATED</small><strong>${relativeTime(event.time)}</strong></div>
    <div><small>LATITUDE</small><strong>${formatCoord(event.lat,'N','S')}</strong></div>
    <div><small>LONGITUDE</small><strong>${formatCoord(event.lon,'E','W')}</strong></div>
    <div><small>SOURCE</small><strong>${escapeHtml(event.source)}</strong></div>`;
  els.detailSource.href=event.sourceUrl || '#';
  els.detail.classList.add('visible');
  els.detail.setAttribute('aria-hidden','false');
}

async function loadWeather(lat,lon,place='Selected location') {
  els.weather.classList.add('visible');
  els.weather.setAttribute('aria-hidden','false');
  els.weatherPlace.textContent=place;
  els.weatherCondition.textContent='Loading current conditions…';
  els.weatherTemp.textContent='—°';
  els.weatherStats.innerHTML='<div><small>STATUS</small><strong>SYNCING</strong></div>';
  els.weatherCoords.textContent=`${formatCoord(lat,'N','S')} · ${formatCoord(lon,'E','W')}`;
  try {
    const data=await fetchWeather(lat,lon);
    const c=data.current || {};
    els.weatherCondition.textContent=weatherCodeLabel(c.weather_code);
    els.weatherTemp.textContent=Number.isFinite(c.temperature_2m) ? `${Math.round(c.temperature_2m)}°` : '—°';
    els.weatherStats.innerHTML=`
      <div><small>FEELS LIKE</small><strong>${Number.isFinite(c.apparent_temperature)?Math.round(c.apparent_temperature)+'°':'—'}</strong></div>
      <div><small>WIND</small><strong>${Number.isFinite(c.wind_speed_10m)?Math.round(c.wind_speed_10m)+' km/h':'—'}</strong></div>
      <div><small>HUMIDITY</small><strong>${Number.isFinite(c.relative_humidity_2m)?Math.round(c.relative_humidity_2m)+'%':'—'}</strong></div>`;
  } catch(error) {
    els.weatherCondition.textContent='Weather source is temporarily unavailable.';
    els.weatherStats.innerHTML='<div><small>STATUS</small><strong>UNAVAILABLE</strong></div>';
  }
}

function renderStarPicker() {
  els.starPicker.innerHTML=FEATURED_STARS.map(star=>`<button class="star-pick" type="button" data-star-id="${star.id}" style="--star-color:${star.color}"><span><i></i><strong>${star.name}</strong></span><small>${star.distance}</small></button>`).join('');
  $$('.star-pick').forEach(btn=>btn.addEventListener('click',()=>focusStar(btn.dataset.starId)));
}

function focusStar(id) {
  const star=FEATURED_STARS.find(s=>s.id===id);
  if(!star) return;
  scene.focusStar(id);
  $('.star-pick').forEach(btn=>btn.classList.toggle('active',btn.dataset.starId===id));
  els.starName.textContent=star.name;
  els.starSubtitle.textContent=star.subtitle;
  els.starFacts.innerHTML=`
    <div><small>DISTANCE</small><strong>${star.distance}</strong></div>
    <div><small>TYPE</small><strong>${star.type}</strong></div>
    <div><small>TEMPERATURE</small><strong>${star.temperature}</strong></div>
    <div><small>DISPLAY RADIUS</small><strong>${star.radius}</strong></div>`;
  els.starCard.classList.add('visible');
  els.starCard.setAttribute('aria-hidden','false');
}

function renderPlanetPicker() {
  if(!els.planetPicker) return;
  els.planetPicker.innerHTML=PLANETS.map(planet=>`<button class="planet-pick" type="button" data-planet-id="${planet.id}" style="--planet-color:${planet.color}"><span><i></i><strong>${planet.name}</strong></span><small>${planet.distance}</small></button>`).join('');
  $('.planet-pick').forEach(btn=>btn.addEventListener('click',()=>focusPlanet(btn.dataset.planetId)));
}

function focusPlanet(id) {
  const planet=PLANETS.find(p=>p.id===id);
  if(!planet || !els.planetCard) return;
  scene.focusPlanet(id);
  $('.planet-pick').forEach(btn=>btn.classList.toggle('active',btn.dataset.planetId===id));
  els.planetName.textContent=planet.name;
  els.planetSubtitle.textContent=planet.subtitle;
  els.planetFacts.innerHTML=`
    <div><small>FROM SUN</small><strong>${planet.distance}</strong></div>
    <div><small>DIAMETER</small><strong>${planet.diameter}</strong></div>
    <div><small>ORBITAL PERIOD</small><strong>${planet.year}</strong></div>
    <div><small>MOONS</small><strong>${planet.moons}</strong></div>`;
  els.planetCard.classList.add('visible');
  els.planetCard.setAttribute('aria-hidden','false');
}

function escapeHtml(value='') {
  return String(value).replace(/[&<>'"]/g,(ch)=>({ '&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;' }[ch]));
}

async function loadEvents() {
  els.dataStatus.textContent='SYNCING';
  try {
    const result=await fetchAllEvents();
    state.events=result.events;
    scene.setEvents(state.events);
    counts();
    renderEvents();
    if(result.errors.length && state.events.length) {
      els.dataStatus.textContent='PARTIAL';
      toast('One live source is temporarily unavailable; available feeds are still shown.');
    } else if(state.events.length) {
      els.dataStatus.textContent='LIVE';
    } else {
      els.dataStatus.textContent='NO FEED';
      toast('Live sources returned no usable events. No demo events were substituted.');
    }
  } catch(error) {
    state.events=[];
    scene.setEvents([]);
    counts();
    renderEvents();
    els.dataStatus.textContent='OFFLINE';
    toast('Live data could not be reached. The 3D explorer is still available.');
  }
}

$$('.mode-btn').forEach(btn=>btn.addEventListener('click',()=>setMode(btn.dataset.mode)));
$$('[data-mode-target]').forEach(btn=>btn.addEventListener('click',()=>setMode(btn.dataset.modeTarget)));

$$('.filter-chip').forEach(btn=>btn.addEventListener('click',()=>{
  state.filter=btn.dataset.filter;
  $$('.filter-chip').forEach(x=>x.classList.toggle('active',x===btn));
  if(state.filter==='all') scene.setFilteredEventTypes(null);
  else scene.setFilteredEventTypes(new Set([state.filter]));
  renderEvents();
}));

els.theme.addEventListener('click',()=>setTheme(state.theme==='dark'?'light':'dark'));
els.share?.addEventListener('click',shareEarthPulse);
$('#panelClose').addEventListener('click',()=>setMode('earth'));
$('#detailClose').addEventListener('click',()=>els.detail.classList.remove('visible'));
$('#weatherClose').addEventListener('click',()=>els.weather.classList.remove('visible'));
$('#starClose').addEventListener('click',()=>els.starCard.classList.remove('visible'));
$('#planetClose')?.addEventListener('click',()=>els.planetCard?.classList.remove('visible'));

els.searchForm.addEventListener('submit',async(e)=>{
  e.preventDefault();
  const query=els.searchInput.value.trim();
  if(!query) return;
  const old=els.searchInput.value;
  els.searchInput.value='Searching…';
  els.searchInput.disabled=true;
  try {
    const place=await searchLocation(query);
    if(!place) {
      toast(`No location found for “${query}”.`);
      return;
    }
    if(state.mode==='space' || state.mode==='system') setMode('earth');
    scene.focusLocation(place.lat,place.lon);
    const label=[place.name,place.admin1,place.country].filter(Boolean).join(', ');
    if(state.mode==='weather') await loadWeather(place.lat,place.lon,label);
    else toast(`Flying to ${label}`);
  } catch(error) {
    toast('Location search is temporarily unavailable.');
  } finally {
    els.searchInput.disabled=false;
    els.searchInput.value=old;
    els.searchInput.focus();
  }
});

window.addEventListener('earthpulse:event',(e)=>selectEvent(e.detail.event));
window.addEventListener('earthpulse:location',(e)=>loadWeather(e.detail.lat,e.detail.lon));
window.addEventListener('earthpulse:star',(e)=>focusStar(e.detail.id));
window.addEventListener('earthpulse:planet',(e)=>focusPlanet(e.detail.id));

setTheme(state.theme);
setMode('earth');
renderStarPicker();
renderPlanetPicker();
loadEvents();
setTimeout(()=>els.boot.classList.add('done'),1250);

// Refresh live event feeds every 10 minutes without reloading the experience.
setInterval(loadEvents,10*60*1000);
