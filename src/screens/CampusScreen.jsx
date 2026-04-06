import { MapContainer, TileLayer, Polyline, CircleMarker, Marker } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// ─── Real GPS coordinates (sourced from OSM + Ticketmaster schema) ──────────
const CAMPUS_CENTER  = [53.38557, -6.25933]
const USER_POSITION  = [53.38479, -6.26010]  // Collins Avenue entrance gate
const HELIX_POSITION = [53.38634, -6.25856]  // The Helix entrance (verified)

const CAMPUS_ROUTE = [
  [53.38479, -6.26010],  // Collins Avenue main entrance
  [53.38490, -6.25870],  // Inside campus, top of Mall approach
  [53.38550, -6.25750],  // Mid-Mall central hub
  [53.38620, -6.25720],  // Upper Mall near Business School
  [53.38634, -6.25856],  // The Helix entrance
]

// Custom Helix destination pin
const helixIcon = L.divIcon({
  html: `
    <div style="display:flex;flex-direction:column;align-items:center">
      <div style="background:#2563EB;color:white;padding:5px 12px;border-radius:16px;font-size:11px;font-weight:700;font-family:Inter,sans-serif;white-space:nowrap;box-shadow:0 4px 14px rgba(37,99,235,0.55);letter-spacing:0.2px">
        The Helix
      </div>
      <div style="width:0;height:0;border-left:7px solid transparent;border-right:7px solid transparent;border-top:8px solid #2563EB;margin-top:-1px"></div>
      <div style="width:9px;height:9px;background:#2563EB;border:2.5px solid white;border-radius:50%;margin-top:-1px;box-shadow:0 2px 6px rgba(37,99,235,0.5)"></div>
    </div>
  `,
  className: '',
  iconSize: [90, 52],
  iconAnchor: [45, 52],
})

export default function CampusScreen({ onEnterBuilding }) {
  return (
    <div style={styles.container}>
      {/* Full-screen satellite map */}
      <div style={styles.mapContainer}>
        <MapContainer
          center={CAMPUS_CENTER}
          zoom={17}
          zoomControl={false}
          dragging={false}
          scrollWheelZoom={false}
          doubleClickZoom={false}
          touchZoom={false}
          keyboard={false}
          attributionControl={false}
          style={{ height: '100%', width: '100%' }}
        >
          {/* Esri World Imagery satellite tiles — free, no API key */}
          <TileLayer
            url="https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}"
            attribution="&copy; Esri"
          />

          {/* Walking route from campus entrance to The Helix */}
          {/* Outer white glow line */}
          <Polyline
            positions={CAMPUS_ROUTE}
            pathOptions={{ color: 'white', weight: 9, opacity: 0.35, lineCap: 'round', lineJoin: 'round' }}
          />
          {/* Main blue route line */}
          <Polyline
            positions={CAMPUS_ROUTE}
            pathOptions={{ color: '#2563EB', weight: 5, opacity: 0.95, lineCap: 'round', lineJoin: 'round' }}
          />

          {/* User position — pulsing blue dot */}
          <CircleMarker
            center={USER_POSITION}
            radius={14}
            pathOptions={{ fillColor: '#2563EB', fillOpacity: 0.2, color: '#2563EB', opacity: 0.3, weight: 1 }}
          />
          <CircleMarker
            center={USER_POSITION}
            radius={8}
            pathOptions={{ fillColor: '#2563EB', fillOpacity: 1, color: 'white', weight: 2.5 }}
          />

          {/* The Helix destination pin */}
          <Marker position={HELIX_POSITION} icon={helixIcon} />
        </MapContainer>
      </div>

      {/* Header badge */}
      <div style={styles.headerBadge}>
        <div style={styles.dotOnline} />
        <span style={styles.headerText}>DCU Glasnevin Campus</span>
      </div>

      {/* Bottom card */}
      <div style={styles.bottomCard}>
        <div style={styles.handle} />
        <div style={styles.cardRow}>
          <div style={styles.buildingIcon}>
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
            </svg>
          </div>
          <div style={styles.cardText}>
            <span style={styles.cardTitle}>The Helix</span>
            <span style={styles.cardSubtitle}>8 min · 450m · via The Mall</span>
          </div>
        </div>
        <button style={styles.enterBtn} onClick={onEnterBuilding}>
          Enter Building  →
        </button>
        <p style={styles.cardHint}>Navigate to a room or facility inside The Helix</p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    position: 'relative',
    height: '100%',
    overflow: 'hidden',
  },
  mapContainer: {
    position: 'absolute',
    inset: 0,
  },
  headerBadge: {
    position: 'absolute',
    top: 20,
    left: '50%',
    transform: 'translateX(-50%)',
    background: 'rgba(0,0,0,0.65)',
    backdropFilter: 'blur(8px)',
    borderRadius: 20,
    padding: '8px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    zIndex: 1000,
  },
  dotOnline: {
    width: 8,
    height: 8,
    borderRadius: '50%',
    background: '#10B981',
    flexShrink: 0,
  },
  headerText: {
    fontSize: 13,
    fontWeight: 600,
    color: 'white',
    fontFamily: 'Inter, sans-serif',
    whiteSpace: 'nowrap',
  },
  bottomCard: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    background: 'white',
    borderRadius: '24px 24px 0 0',
    padding: '12px 24px 32px',
    boxShadow: '0 -8px 32px rgba(0,0,0,0.18)',
    zIndex: 1000,
  },
  handle: {
    width: 40,
    height: 4,
    background: '#E5E7EB',
    borderRadius: 2,
    margin: '0 auto 20px',
  },
  cardRow: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    marginBottom: 18,
  },
  buildingIcon: {
    width: 48,
    height: 48,
    borderRadius: 14,
    background: '#EFF6FF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  cardText: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: 700,
    color: '#111827',
    fontFamily: 'Inter, sans-serif',
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#6B7280',
    fontFamily: 'Inter, sans-serif',
  },
  enterBtn: {
    width: '100%',
    padding: '15px 0',
    background: '#2563EB',
    color: 'white',
    border: 'none',
    borderRadius: 16,
    fontSize: 16,
    fontWeight: 700,
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    letterSpacing: '0.1px',
    marginBottom: 12,
  },
  cardHint: {
    fontSize: 12,
    color: '#9CA3AF',
    textAlign: 'center',
    fontFamily: 'Inter, sans-serif',
  },
}
