import { helixRoutes, defaultDemoRoute } from '../data/routes'
import IndoorMap from '../components/IndoorMap'

const BackIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

const WalkIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="5" r="1" fill="#6B7280" stroke="none" />
    <path d="M9 20l1.5-5L14 17l2-5" />
    <path d="M11 11.5L12.5 8l3.5 2" />
  </svg>
)

export default function RoutePreviewScreen({ location, onStart, onBack }) {
  const route = helixRoutes[location?.id] ?? defaultDemoRoute

  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        <button style={styles.iconBtn} onClick={onBack} aria-label="Back">
          <BackIcon />
        </button>
        <span style={styles.logo}>Wayfinder</span>
        <div style={{ width: 36 }} />
      </div>

      {/* Map — preview mode (no userPosition = shows static YOU ARE HERE) */}
      <div style={styles.mapContainer}>
        <IndoorMap
          route={route}
          locationName={location?.name ?? 'Destination'}
          floor={route.floor}
        />
      </div>

      {/* Bottom Sheet */}
      <div style={styles.bottomSheet}>
        <div style={styles.handle} />
        <div style={styles.routeRow}>
          <div>
            <div style={styles.walkTime}>
              {route.totalTime}<span style={styles.minLabel}> min</span>
            </div>
            <div style={styles.routeMeta}>
              <WalkIcon />
              <span style={styles.routeMetaText}>{route.totalDistance} · {route.floor}</span>
            </div>
          </div>
          <div style={styles.routeTag}>
            <span style={styles.routeTagTitle}>FASTEST ROUTE</span>
            <span style={styles.routeTagSub}>{location?.route ?? 'via Main Corridor'}</span>
          </div>
        </div>
        <button style={styles.startBtn} onClick={onStart}>
          Start Navigation
        </button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    background: '#ffffff',
    overflow: 'hidden',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '18px 20px 14px',
    background: '#ffffff',
    borderBottom: '1px solid #F3F4F6',
    flexShrink: 0,
  },
  iconBtn: {
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    padding: 6,
    display: 'flex',
    alignItems: 'center',
    borderRadius: 8,
  },
  logo: {
    fontSize: 20,
    fontWeight: 700,
    color: '#111827',
    letterSpacing: '-0.3px',
  },
  mapContainer: {
    flex: 1,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    background: '#D6D9DE',
  },
  bottomSheet: {
    background: '#ffffff',
    borderRadius: '24px 24px 0 0',
    padding: '12px 24px 28px',
    boxShadow: '0 -4px 24px rgba(0,0,0,0.10)',
    flexShrink: 0,
  },
  handle: {
    width: 40,
    height: 4,
    background: '#E5E7EB',
    borderRadius: 2,
    margin: '0 auto 20px',
  },
  routeRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 20,
  },
  walkTime: {
    fontSize: 42,
    fontWeight: 700,
    color: '#111827',
    lineHeight: 1,
    letterSpacing: '-1px',
  },
  minLabel: {
    fontSize: 20,
    fontWeight: 500,
    color: '#6B7280',
    letterSpacing: 0,
  },
  routeMeta: {
    display: 'flex',
    alignItems: 'center',
    gap: 6,
    marginTop: 6,
  },
  routeMetaText: {
    fontSize: 14,
    color: '#6B7280',
  },
  routeTag: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    gap: 2,
  },
  routeTagTitle: {
    fontSize: 11,
    fontWeight: 700,
    color: '#2563EB',
    letterSpacing: '0.6px',
  },
  routeTagSub: {
    fontSize: 12,
    color: '#6B7280',
    textAlign: 'right',
    maxWidth: 130,
  },
  startBtn: {
    width: '100%',
    padding: '16px 0',
    background: '#2563EB',
    color: '#ffffff',
    border: 'none',
    borderRadius: 16,
    fontSize: 17,
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: 'inherit',
    letterSpacing: '-0.2px',
  },
}
