# EarthPulse 3D

**EarthPulse 3D** is a cinematic Earth-and-space explorer by **Suhail Labs**. It combines a realistic textured 3D Earth, NASA satellite imagery, current natural-event feeds, local weather, a textured Solar System, the Moon, galaxy destinations and featured-star visualizations in one responsive browser experience.

> **Live-data principle:** EarthPulse does not invent earthquakes, natural events or weather when a source is unavailable. The interface reports partial/offline states instead.

## Highlights

- Realistic 3D Earth with local day texture, night lights, animated cloud layer and atmospheric glow
- Free **NASA GIBS** surface explorer with:
  - VIIRS corrected-reflectance true-color imagery
  - Blue Marble Next Generation
  - pan, pinch and zoom
  - location search
  - click-only point selection
- Dragging/orbiting no longer triggers weather or information cards; selection requires an intentional tap/click
- Live earthquakes from **USGS**
- Open natural events from **NASA EONET**
- Current weather from **Open-Meteo**
- Textured Solar System with the Sun, Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus and Neptune
- Selectable textured **Moon** orbiting Earth
- Textured Saturn rings
- Planet and Moon cinematic fly-to close-ups
- Galaxy destinations: Milky Way, Andromeda and Triangulum
- Featured stars: Sirius, Vega, Betelgeuse and Proxima Centauri
- Light and Night themes
- Adaptive mobile rendering and reduced-motion support
- iPhone/WebKit-tested single-file production runtime
- One-tap cinematic tour and native mobile sharing
- Install / Add to Home Screen support with dedicated iPhone instructions
- Offline 3D core and locally cached creator/About assets
- Automatic update checks when an installed device reconnects to the internet
- About panel with the approved Suhail Saeedy creator portrait
- No paid API, private API key, database or local server required

## Install, offline use and automatic updates

EarthPulse 3D is an installable Progressive Web App.

- On browsers that support the native install prompt, use the **Install** button in the top bar.
- On iPhone/iPad, open EarthPulse in Safari, tap **Share**, choose **Add to Home Screen**, then confirm **Add**.
- After the first successful installation/visit, the local app shell, creator About panel, 3D Earth, Solar System, Moon, Galaxy and locally stored textures are cached for offline use.
- Live earthquakes, current weather, location search and fresh NASA satellite imagery still require internet access because those values must remain current.
- When the device reconnects, EarthPulse checks the online release marker and service worker. If a newer release exists, the installed app refreshes to the latest version automatically.
- The About panel uses the approved Suhail Saeedy portrait shared with the Suhail Live Wallpapers project.

## Real imagery and scientific honesty

### Earth satellite imagery

The full-screen **Satellite Earth** view uses NASA GIBS public WMS imagery. It currently combines **Blue Marble Next Generation** with recent **VIIRS SNPP Corrected Reflectance True Color** imagery.

This is a free NASA-based alternative to a commercial satellite map. It is intentionally **not described as Google Maps imagery** and does not claim Google Maps' proprietary global building-level resolution. Native imagery resolution varies by NASA layer; additional zoom can enlarge the imagery but cannot invent detail that is not present in the source.

### Planetary textures

Planet, Sun, Moon, Earth-cloud/night and Milky-Way texture assets in `public/textures/` are sourced from the Solar System Scope texture pack by **INOVE / Solar System Scope** under **CC BY 4.0**. Attribution is preserved in:

`public/textures/ATTRIBUTION.txt`

The texture provider states that its maps are based on NASA elevation and imagery data, while some unmapped planetary areas are artistically completed. Therefore the app calls them mapped/scientific visualizations rather than live imagery.

Galaxy and featured-star fly-throughs are also **scientific visualizations**, not live telescope/camera footage and not spatially to scale.

## Live/public data sources

- **USGS Earthquake Hazards Program** — 24-hour GeoJSON earthquake feed
- **NASA EONET v3** — open natural events
- **NASA EOSDIS GIBS** — Blue Marble and VIIRS true-color map imagery
- **Open-Meteo** — geocoding and current weather

## Architecture

```text
suhail-earthpulse-3d/
├── index.html
├── styles.css
├── app.bundle.js          # generated Safari/iPhone-compatible runtime
├── app.bundle.css         # generated Leaflet CSS
├── assets/                # generated Leaflet assets + creator portrait
├── icons/                 # PWA / iOS Home Screen icons
├── manifest.webmanifest
├── sw.js                  # offline cache and update worker
├── version.json           # online release marker
├── public/
│   └── textures/          # attributed local planet/Earth/Moon textures
├── src/
│   ├── main.js            # app state and UI orchestration
│   ├── pwa.js             # installation, offline/update lifecycle
│   ├── scene.js           # Three.js Earth/Solar System/galaxy engine
│   ├── satellite.js       # Leaflet + NASA GIBS surface explorer
│   ├── api.js             # USGS, NASA EONET and Open-Meteo clients
│   └── data.js            # planets, Moon, galaxies, stars and helpers
└── .github/workflows/
    ├── bundle-runtime.yml
    ├── webkit-smoke.yml
    ├── vendor-space-textures.yml
    ├── sync-pwa-assets.yml
    ├── pwa-version.yml
    └── pages.yml          # quality checks
```

## Technology

- HTML5 + modern CSS
- Three.js + OrbitControls
- Leaflet
- NASA GIBS WMS
- esbuild-generated single-file production runtime targeting Safari/iOS 14+
- Playwright WebKit smoke testing
- GitHub Actions
- Render Static Site

## Deployment

The production site is hosted as a **free Render Static Site**:

**https://suhail-earthpulse-3d.onrender.com**

The source remains in GitHub. GitHub Actions builds the iPhone-compatible bundle, verifies required assets, and runs a real WebKit startup smoke test. No local computer, database, paid hosting plan or private API key is required for the current feature set.

## Privacy and security

EarthPulse contains no private browser-side API keys. Current external integrations are public read-only data/imagery services.

## Brand

**EarthPulse 3D**  
*Watch our world come alive.*  
Created by **Suhail Labs**.
