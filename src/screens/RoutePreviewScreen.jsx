import { helixRoutes, defaultDemoRoute } from '../data/routes'

// ─── Icons ────────────────────────────────────────────────────────────────────

const BackIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

const WalkIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="4" r="1.5" fill="#6B7280" stroke="none" />
    <path d="M8 8l4 2 2 5" />
    <path d="M12 10l2 3-3 4" />
    <path d="M9 20l2-4" />
  </svg>
)

// ─── Helix Floor Plan SVG ─────────────────────────────────────────────────────

function HelixFloorPlan({ route, locationName }) {
  const waypoints = route?.waypoints ?? []
  const routePath = waypoints.map(w => `${w.x},${w.y}`).join(' ')
  const start = waypoints[0]
  const end = waypoints[waypoints.length - 1]

  return (
    <svg
      width="100%"
      height="100%"
      viewBox="0 0 390 440"
      preserveAspectRatio="xMidYMid meet"
      style={{ display: 'block' }}
    >
      {/* ── Building shell ── */}
      <rect x="0" y="0" width="390" height="440" fill="#E4E7EB" />

      {/* ── Mahony Hall (top left) ── */}
      <rect x="12" y="12" width="190" height="200" rx="5" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
      <text x="107" y="98" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1F2937" fontFamily="Inter,sans-serif">Mahony</text>
      <text x="107" y="116" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1F2937" fontFamily="Inter,sans-serif">Hall</text>
      <text x="107" y="136" textAnchor="middle" fontSize="10" fill="#9CA3AF" fontFamily="Inter,sans-serif">1,300 capacity</text>

      {/* ── Helix Theatre (top right) ── */}
      <rect x="210" y="12" width="168" height="200" rx="5" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
      <text x="294" y="98" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1F2937" fontFamily="Inter,sans-serif">Helix</text>
      <text x="294" y="116" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1F2937" fontFamily="Inter,sans-serif">Theatre</text>
      <text x="294" y="136" textAnchor="middle" fontSize="10" fill="#9CA3AF" fontFamily="Inter,sans-serif">433 seats</text>

      {/* ── Main east–west corridor ── */}
      <rect x="0" y="220" width="390" height="52" fill="#F0F2F5" />

      {/* ── Helix Staircase (iconic feature, centre of corridor) ── */}
      <circle cx="195" cy="246" r="22" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="2" />
      <text x="195" y="242" textAnchor="middle" fontSize="8" fontWeight="700" fill="#2563EB" fontFamily="Inter,sans-serif">HELIX</text>
      <text x="195" y="254" textAnchor="middle" fontSize="8" fontWeight="700" fill="#2563EB" fontFamily="Inter,sans-serif">STAIR</text>

      {/* ── Box Office (bottom left) ── */}
      <rect x="12" y="280" width="88" height="100" rx="5" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
      <text x="56" y="326" textAnchor="middle" fontSize="11" fontWeight="600" fill="#374151" fontFamily="Inter,sans-serif">Box</text>
      <text x="56" y="341" textAnchor="middle" fontSize="11" fontWeight="600" fill="#374151" fontFamily="Inter,sans-serif">Office</text>

      {/* ── Main Foyer (centre) ── */}
      <rect x="106" y="280" width="178" height="100" rx="5" fill="#F8F9FA" stroke="#E5E7EB" strokeWidth="1" />
      <text x="195" y="336" textAnchor="middle" fontSize="11" fontWeight="500" fill="#9CA3AF" fontFamily="Inter,sans-serif">Main Foyer</text>

      {/* ── Café Bar (bottom right) ── */}
      <rect x="290" y="280" width="88" height="100" rx="5" fill="#FFFFFF" stroke="#CBD5E1" strokeWidth="1.5" />
      <text x="334" y="326" textAnchor="middle" fontSize="11" fontWeight="600" fill="#374151" fontFamily="Inter,sans-serif">Café</text>
      <text x="334" y="341" textAnchor="middle" fontSize="11" fontWeight="600" fill="#374151" fontFamily="Inter,sans-serif">Bar</text>

      {/* ── Entrance vestibule ── */}
      <rect x="148" y="386" width="94" height="42" rx="5" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="1.5" />
      <text x="195" y="412" textAnchor="middle" fontSize="10" fontWeight="700" fill="#2563EB" fontFamily="Inter,sans-serif">ENTRANCE</text>

      {/* ── Floor label badge ── */}
      <rect x="12" y="392" width="88" height="26" rx="6" fill="#1F2937" />
      <text x="56" y="410" textAnchor="middle" fontSize="11" fontWeight="600" fill="#FFFFFF" fontFamily="Inter,sans-serif">Ground Floor</text>

      {/* ── Route line ── */}
      {routePath && (
        <polyline
          points={routePath}
          fill="none"
          stroke="#2563EB"
          strokeWidth="4.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.9"
        />
      )}

      {/* ── Start marker (YOU ARE HERE) ── */}
      {start && (
        <>
          <circle cx={start.x} cy={start.y} r="10" fill="#10B981" />
          <circle cx={start.x} cy={start.y} r="4" fill="white" />
          <text x={start.x} y={start.y + 20} textAnchor="middle" fontSize="8" fontWeight="700" fill="#10B981" fontFamily="Inter,sans-serif">YOU ARE HERE</text>
        </>
      )}

      {/* ── Destination pin ── */}
      {end && (
        <>
          {/* Callout label */}
          <rect x={end.x - 52} y={end.y - 42} width="104" height="26" rx="6" fill="#2563EB" />
          <text x={end.x} y={end.y - 24} textAnchor="middle" fontSize="10" fontWeight="700" fill="white" fontFamily="Inter,sans-serif">{locationName}</text>
          {/* Pin circle */}
          <circle cx={end.x} cy={end.y} r="12" fill="#2563EB" />
          <circle cx={end.x} cy={end.y} r="5" fill="white" />
        </>
      )}
    </svg>
  )
}

// ─── Screen ───────────────────────────────────────────────────────────────────

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

      {/* Map */}
      <div style={styles.mapContainer}>
        <HelixFloorPlan route={route} locationName={location?.name ?? 'Destination'} />
      </div>

      {/* Bottom Sheet */}
      <div style={styles.bottomSheet}>
        <div style={styles.handle} />

        <div style={styles.routeRow}>
          <div>
            <div style={styles.walkTime}>{route.totalTime} <span style={styles.minLabel}>min</span></div>
            <div style={styles.routeMeta}>
              <WalkIcon />
              <span style={styles.routeMetaText}>{route.totalDistance} · {route.floor}</span>
            </div>
          </div>
          <div style={styles.routeTag}>
            <span style={styles.routeTagTitle}>FASTEST ROUTE</span>
            <span style={styles.routeTagSub}>{location?.route ?? route.startLabel}</span>
          </div>
        </div>

        <button style={styles.startBtn} onClick={onStart}>
          Start Navigation
        </button>
      </div>
    </div>
  )
}

// ─── Styles ───────────────────────────────────────────────────────────────────

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
    justifyContent: 'center',
    background: '#E4E7EB',
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
    maxWidth: 120,
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
