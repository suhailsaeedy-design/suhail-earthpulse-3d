# EarthPulse 3D

**EarthPulse 3D** is a cinematic, browser-based Earth and space explorer by **Suhail Labs**. It combines a real-time 3D planet, current natural-event feeds, click-anywhere weather, location search, a procedural galaxy, and close-up scientific star visualizations in one responsive experience.

> **Live-data principle:** EarthPulse does not invent natural events when a source is unavailable. The interface clearly reports partial/offline states and keeps the 3D explorer usable.

## Highlights

- Interactive 3D Earth with atmosphere, star field, touch/mouse orbit and zoom
- Live earthquakes from **USGS**
- Open natural events from **NASA EONET** (wildfires, severe storms, volcanoes, floods and more when available)
- Current weather from **Open-Meteo** by tapping the globe or searching a place
- Galaxy mode with procedural Milky-Way-style particles
- Featured-star fly-to experiences for Sirius, Vega, Betelgeuse and Proxima Centauri
- Light and Night themes
- Responsive mobile-first UI for iPhone, Android and desktop browsers
- Zero paid backend and zero database requirement
- Automatic GitHub Pages deployment workflow

## Data sources

EarthPulse reads public data directly in the browser:

- USGS Earthquake Hazards Program — 24-hour GeoJSON feed
- NASA EONET v3 — open natural events
- Open-Meteo — geocoding and current weather

The 3D star close-ups are **scientific visualizations**, not live telescope/camera imagery. Distances and selected stellar facts are informational reference values and the scene is intentionally not spatially to scale.

## Architecture

This project is intentionally build-free so it can be hosted completely online at no cost on GitHub Pages.

```text
suhail-earthpulse-3d/
├── index.html
├── styles.css
├── favicon.svg
├── manifest.webmanifest
├── .nojekyll
├── src/
│   ├── main.js      # UI, state and app orchestration
│   ├── scene.js     # Three.js Earth + galaxy rendering
│   ├── api.js       # USGS, NASA EONET and Open-Meteo clients
│   └── data.js      # star reference data + display helpers
└── .github/workflows/pages.yml
```

## Technology

- HTML5 + modern CSS
- Native ES modules
- Three.js + OrbitControls (CDN import map)
- Public HTTPS APIs only
- GitHub Actions + GitHub Pages

## Deployment

The production site is hosted as a **free Render Static Site** and automatically redeploys from the `main` branch.

**Live site:** https://suhail-earthpulse-3d.onrender.com

No local computer, Node.js installation, database, or paid hosting is required. The GitHub Actions workflow performs syntax and required-file quality checks on every push.

## Privacy and security

EarthPulse contains no private API keys. All current integrations are public read-only web APIs. Never commit secrets to this public repository if private services are added later.

## Brand

**EarthPulse 3D**  
*Watch our world come alive.*  
Created by **Suhail Labs**.
