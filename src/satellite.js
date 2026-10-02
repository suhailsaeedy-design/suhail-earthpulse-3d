import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

const GIBS_WMS = 'https://gibs.earthdata.nasa.gov/wms/epsg3857/best/wms.cgi';

function isoDaysAgo(days = 2) {
  const d = new Date(Date.now() - days * 86400000);
  return d.toISOString().slice(0, 10);
}

export class SatelliteExplorer {
  constructor(container, { onSelect, onZoom } = {}) {
    this.container = container;
    this.onSelect = onSelect;
    this.onZoom = onZoom;
    this.selected = null;
    this.date = isoDaysAgo(2);

    this.map = L.map(container, {
      zoomControl: false,
      attributionControl: true,
      minZoom: 1,
      maxZoom: 13,
      worldCopyJump: true,
      inertia: true,
      zoomAnimation: true,
      fadeAnimation: true,
      markerZoomAnimation: false
    });

    L.control.zoom({ position: 'bottomright' }).addTo(this.map);

    this.baseLayer = L.tileLayer.wms(GIBS_WMS, {
      layers: 'BlueMarble_NextGeneration',
      format: 'image/jpeg',
      transparent: false,
      version: '1.1.1',
      maxZoom: 13,
      attribution: 'NASA GIBS'
    });

    this.dailyLayer = L.tileLayer.wms(GIBS_WMS, {
      layers: 'VIIRS_SNPP_CorrectedReflectance_TrueColor',
      format: 'image/jpeg',
      transparent: true,
      version: '1.1.1',
      time: this.date,
      maxZoom: 13,
      opacity: 0.96,
      attribution: 'NASA EOSDIS GIBS / VIIRS'
    });

    this.baseLayer.addTo(this.map);
    this.dailyLayer.addTo(this.map);

    this.crosshair = L.circleMarker([0, 0], {
      radius: 7,
      weight: 2,
      color: '#79e8ff',
      fillColor: '#79e8ff',
      fillOpacity: 0.25,
      opacity: 0
    }).addTo(this.map);

    this.map.on('click', (event) => {
      const { lat, lng } = event.latlng;
      this.selected = { lat, lon: lng };
      this.crosshair.setLatLng([lat, lng]);
      this.crosshair.setStyle({ opacity: 1, fillOpacity: 0.25 });
      if (this.onSelect) this.onSelect({ lat, lon: lng, zoom: this.map.getZoom() });
    });

    this.map.on('zoomend', () => {
      if (this.onZoom) this.onZoom(this.map.getZoom());
    });

    this.map.setView([20, 0], 2);
  }

  open({ lat = 20, lon = 0, zoom = 2 } = {}) {
    this.container.classList.add('is-open');
    window.setTimeout(() => {
      this.map.invalidateSize();
      this.map.flyTo([lat, lon], zoom, { duration: 1.25 });
    }, 50);
  }

  close() {
    this.container.classList.remove('is-open');
  }

  flyTo(lat, lon, zoom = 6) {
    this.map.invalidateSize();
    this.map.flyTo([lat, lon], zoom, { duration: 1.25 });
  }

  setLayer(mode) {
    if (mode === 'base') {
      if (this.map.hasLayer(this.dailyLayer)) this.map.removeLayer(this.dailyLayer);
    } else {
      if (!this.map.hasLayer(this.dailyLayer)) this.dailyLayer.addTo(this.map);
    }
  }

  getZoom() {
    return this.map.getZoom();
  }

  getSelected() {
    return this.selected;
  }

  getDate() {
    return this.date;
  }
}
