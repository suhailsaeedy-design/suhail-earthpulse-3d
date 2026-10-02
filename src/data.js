export const EVENT_COLORS = {
  earthquake: 0xff5c75,
  wildfire: 0xffa252,
  storm: 0x5aa8ff,
  volcano: 0xb176ff,
  flood: 0x54ddff,
  other: 0x6cf0b8
};

export const EVENT_CSS_COLORS = {
  earthquake: '#ff5c75',
  wildfire: '#ffa252',
  storm: '#5aa8ff',
  volcano: '#b176ff',
  flood: '#54ddff',
  other: '#6cf0b8'
};

export const FEATURED_STARS = [
  {
    id: 'sirius',
    name: 'Sirius',
    subtitle: "The brightest star in Earth's night sky.",
    distance: '8.6 light-years',
    type: 'A1V main-sequence',
    temperature: '≈ 9,940 K',
    radius: '≈ 1.7× Sun',
    color: '#b9d6ff',
    threeColor: 0xb9d6ff,
    position: [12, 6, -8],
    size: 0.72
  },
  {
    id: 'vega',
    name: 'Vega',
    subtitle: 'A bright nearby star and a famous calibration reference.',
    distance: '25 light-years',
    type: 'A0V main-sequence',
    temperature: '≈ 9,600 K',
    radius: '≈ 2.4× Sun',
    color: '#c7dcff',
    threeColor: 0xc7dcff,
    position: [-15, 8, -12],
    size: 0.82
  },
  {
    id: 'betelgeuse',
    name: 'Betelgeuse',
    subtitle: 'A red supergiant in Orion, visualized at a safe display scale.',
    distance: '≈ 548 light-years',
    type: 'Red supergiant',
    temperature: '≈ 3,500 K',
    radius: 'Hundreds × Sun',
    color: '#ff8b66',
    threeColor: 0xff8b66,
    position: [18, -8, -18],
    size: 1.35
  },
  {
    id: 'proxima',
    name: 'Proxima Centauri',
    subtitle: 'The nearest known star to the Sun.',
    distance: '4.24 light-years',
    type: 'Red dwarf',
    temperature: '≈ 3,040 K',
    radius: '≈ 0.15× Sun',
    color: '#ff705c',
    threeColor: 0xff705c,
    position: [-10, -7, -9],
    size: 0.5
  }
];

export const weatherCodeLabel = (code) => {
  if (code === 0) return 'Clear sky';
  if ([1,2].includes(code)) return 'Mostly clear';
  if (code === 3) return 'Overcast';
  if ([45,48].includes(code)) return 'Fog';
  if ([51,53,55,56,57].includes(code)) return 'Drizzle';
  if ([61,63,65,66,67].includes(code)) return 'Rain';
  if ([71,73,75,77].includes(code)) return 'Snow';
  if ([80,81,82].includes(code)) return 'Rain showers';
  if ([85,86].includes(code)) return 'Snow showers';
  if ([95,96,99].includes(code)) return 'Thunderstorm';
  return 'Weather data';
};

export function relativeTime(timestamp) {
  if (!timestamp) return 'recent';
  const ms = Date.now() - new Date(timestamp).getTime();
  if (!Number.isFinite(ms)) return 'recent';
  const mins = Math.max(0, Math.floor(ms / 60000));
  if (mins < 1) return 'now';
  if (mins < 60) return `${mins}m ago`;
  const hours = Math.floor(mins / 60);
  if (hours < 24) return `${hours}h ago`;
  const days = Math.floor(hours / 24);
  return `${days}d ago`;
}

export function formatCoord(value, positive, negative) {
  const abs = Math.abs(value).toFixed(2);
  return `${abs}° ${value >= 0 ? positive : negative}`;
}
