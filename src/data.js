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

export const PLANETS = [
  {
    id: 'mercury',
    name: 'Mercury',
    subtitle: 'The smallest planet and the closest planet to the Sun.',
    distance: '0.39 AU',
    diameter: '4,879 km',
    year: '88 Earth days',
    moons: '0',
    color: '#a9a39a',
    threeColor: 0xa9a39a,
    texture: './public/textures/mercury.jpg',
    orbit: 2.6,
    size: 0.18,
    speed: 0.48
  },
  {
    id: 'venus',
    name: 'Venus',
    subtitle: 'A rocky world wrapped in a dense atmosphere.',
    distance: '0.72 AU',
    diameter: '12,104 km',
    year: '224.7 Earth days',
    moons: '0',
    color: '#d9b36c',
    threeColor: 0xd9b36c,
    texture: './public/textures/venus.jpg',
    orbit: 3.3,
    size: 0.26,
    speed: 0.35
  },
  {
    id: 'earth',
    name: 'Earth',
    subtitle: 'Our home planet, shown here inside the solar-system overview.',
    distance: '1.00 AU',
    diameter: '12,742 km',
    year: '365.25 days',
    moons: '1',
    color: '#5d9dff',
    threeColor: 0x5d9dff,
    texture: './public/textures/earth-day.jpg',
    nightTexture: './public/textures/earth-night.jpg',
    cloudTexture: './public/textures/earth-clouds.jpg',
    orbit: 4.0,
    size: 0.28,
    speed: 0.30
  },
  {
    id: 'mars',
    name: 'Mars',
    subtitle: 'A cold desert world with iron-rich surface material.',
    distance: '1.52 AU',
    diameter: '6,779 km',
    year: '687 Earth days',
    moons: '2',
    color: '#d56d4c',
    threeColor: 0xd56d4c,
    texture: './public/textures/mars.jpg',
    orbit: 4.8,
    size: 0.22,
    speed: 0.24
  },
  {
    id: 'jupiter',
    name: 'Jupiter',
    subtitle: 'The largest planet in the Solar System.',
    distance: '5.20 AU',
    diameter: '139,820 km',
    year: '11.86 Earth years',
    moons: 'Many',
    color: '#d5b38a',
    threeColor: 0xd5b38a,
    texture: './public/textures/jupiter.jpg',
    orbit: 6.3,
    size: 0.62,
    speed: 0.13
  },
  {
    id: 'saturn',
    name: 'Saturn',
    subtitle: 'A gas giant famous for its bright ring system.',
    distance: '9.58 AU',
    diameter: '116,460 km',
    year: '29.45 Earth years',
    moons: 'Many',
    color: '#e3c982',
    threeColor: 0xe3c982,
    texture: './public/textures/saturn.jpg',
    ringTexture: './public/textures/saturn-ring.png',
    orbit: 8.2,
    size: 0.55,
    speed: 0.095,
    rings: true
  },
  {
    id: 'uranus',
    name: 'Uranus',
    subtitle: 'An ice giant with an extreme axial tilt.',
    distance: '19.2 AU',
    diameter: '50,724 km',
    year: '84 Earth years',
    moons: 'Many',
    color: '#8fd8dc',
    threeColor: 0x8fd8dc,
    texture: './public/textures/uranus.jpg',
    orbit: 10.0,
    size: 0.42,
    speed: 0.065
  },
  {
    id: 'neptune',
    name: 'Neptune',
    subtitle: 'A distant ice giant with powerful atmospheric winds.',
    distance: '30.05 AU',
    diameter: '49,244 km',
    year: '164.8 Earth years',
    moons: 'Many',
    color: '#5277e8',
    threeColor: 0x5277e8,
    texture: './public/textures/neptune.jpg',
    orbit: 11.7,
    size: 0.41,
    speed: 0.052
  }
];

export const MOON = {
  id: 'moon',
  name: 'Moon',
  subtitle: "Earth's natural satellite, shown with a real mapped surface texture.",
  distance: '384,400 km from Earth',
  diameter: '3,474 km',
  year: '27.3 Earth days',
  moons: '—',
  color: '#d7d8db',
  threeColor: 0xd7d8db,
  texture: './public/textures/moon.jpg',
  size: 0.095
};

export const GALAXIES = [
  {
    id: 'milky-way',
    name: 'Milky Way',
    subtitle: 'Our home barred spiral galaxy.',
    distance: 'You are here',
    diameter: '≈ 100,000 light-years',
    stars: 'Hundreds of billions',
    color: '#8fbaff',
    position: [0, 0, -28],
    scale: 10
  },
  {
    id: 'andromeda',
    name: 'Andromeda Galaxy',
    subtitle: 'The nearest large galaxy to the Milky Way.',
    distance: '≈ 2.5 million light-years',
    diameter: '≈ 220,000 light-years',
    stars: '≈ 1 trillion',
    color: '#d5c3ff',
    position: [34, 11, -52],
    scale: 8
  },
  {
    id: 'triangulum',
    name: 'Triangulum Galaxy',
    subtitle: 'A spiral galaxy in the Local Group.',
    distance: '≈ 2.7 million light-years',
    diameter: '≈ 60,000 light-years',
    stars: 'Tens of billions',
    color: '#87e8ff',
    position: [-31, -8, -48],
    scale: 5.5
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
