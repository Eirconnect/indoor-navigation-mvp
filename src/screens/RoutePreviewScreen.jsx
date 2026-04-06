import { helixRoutes, defaultDemoRoute } from '../data/routes'

// ─── Icons ────────────────────────────────────────────────────────────────────

const BackIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#111827" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="15 18 9 12 15 6" />
  </svg>
)

const WalkIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6B7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M13 4a1 1 0 100-2 1 1 0 000 2z" fill="#6B7280" stroke="none"/>
    <path d="M7 20l2.5-5L13 17l2-5"/>
    <path d="M10.5 11.5L12 8l4 2"/>
  </svg>
)

// ─── Helix Floor Plan — Cross-Corridor Layout ─────────────────────────────────
//
//  ViewBox 0 0 390 440
//
//  ┌────────────┬──────┬────────────┐
//  │ Mahony     │  ↑   │   Helix    │  y=20–180
//  │   Hall     │  │   │   Theatre  │
//  ├────────────┤  │   ├────────────┤
//  │◄═══════════╪══╪═══╪═══════════►│  y=185–245 (horizontal corridor)
//  ├────────────┤  │   ├────────────┤
//  │ Box        │  │   │   Café     │  y=252–352
//  │  Office    │  │   │   Bar      │
//  └────────────┴──┼───┴────────────┘
//                  │  (main vertical corridor)
//              ┌───┴───┐
//              │ENTRANCE│  y=383–427
//              └────────┘

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
      <rect x="0" y="0" width="390" height="440" fill="#D6D9DE" />

      {/* ── Main vertical corridor (entrance spine) ── */}
      <rect x="165" y="20" width="60" height="360" fill="#ECEEF1" />

      {/* ── Horizontal east–west corridor ── */}
      <rect x="20" y="185" width="350" height="60" fill="#ECEEF1" />

      {/* ── TOP-LEFT: Mahony Hall ── */}
      <rect x="20" y="20" width="138" height="160" rx="4" fill="#FFFFFF" stroke="#BFC4CB" strokeWidth="1.5" />
      {/* Door gap (bottom wall opening into corridor) */}
      <rect x="78" y="178" width="22" height="9" fill="#ECEEF1" />
      <text x="89" y="88" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1F2937" fontFamily="Inter,sans-serif">Mahony</text>
      <text x="89" y="106" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1F2937" fontFamily="Inter,sans-serif">Hall</text>
      <text x="89" y="126" textAnchor="middle" fontSize="10" fill="#9CA3AF" fontFamily="Inter,sans-serif">1,300 capacity</text>

      {/* ── TOP-RIGHT: Helix Theatre ── */}
      <rect x="232" y="20" width="138" height="160" rx="4" fill="#FFFFFF" stroke="#BFC4CB" strokeWidth="1.5" />
      {/* Door gap */}
      <rect x="290" y="178" width="22" height="9" fill="#ECEEF1" />
      <text x="301" y="88" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1F2937" fontFamily="Inter,sans-serif">Helix</text>
      <text x="301" y="106" textAnchor="middle" fontSize="13" fontWeight="700" fill="#1F2937" fontFamily="Inter,sans-serif">Theatre</text>
      <text x="301" y="126" textAnchor="middle" fontSize="10" fill="#9CA3AF" fontFamily="Inter,sans-serif">433 seats</text>

      {/* ── BOTTOM-LEFT: Box Office ── */}
      <rect x="20" y="252" width="138" height="100" rx="4" fill="#FFFFFF" stroke="#BFC4CB" strokeWidth="1.5" />
      {/* Door gap (top wall) */}
      <rect x="78" y="245" width="22" height="9" fill="#ECEEF1" />
      <text x="89" y="302" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151" fontFamily="Inter,sans-serif">Box Office</text>

      {/* ── BOTTOM-RIGHT: Café Bar ── */}
      <rect x="232" y="252" width="138" height="100" rx="4" fill="#FFFFFF" stroke="#BFC4CB" strokeWidth="1.5" />
      {/* Door gap (top wall) */}
      <rect x="290" y="245" width="22" height="9" fill="#ECEEF1" />
      <text x="301" y="302" textAnchor="middle" fontSize="12" fontWeight="600" fill="#374151" fontFamily="Inter,sans-serif">Café Bar</text>

      {/* ── Helix Staircase (landmark at corridor intersection) ── */}
      <circle cx="195" cy="215" r="24" fill="#EAF0FF" stroke="#93C5FD" strokeWidth="2" />
      {/* Staircase icon lines */}
      <line x1="188" y1="222" x2="202" y2="222" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="185" y1="216" x2="199" y2="216" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
      <line x1="188" y1="210" x2="202" y2="210" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round"/>
      <text x="195" y="234" textAnchor="middle" fontSize="7" fontWeight="700" fill="#2563EB" fontFamily="Inter,sans-serif">STAIR</text>

      {/* ── Entrance vestibule ── */}
      <rect x="148" y="383" width="94" height="44" rx="4" fill="#EFF6FF" stroke="#93C5FD" strokeWidth="1.5" />
      <text x="195" y="410" textAnchor="middle" fontSize="10" fontWeight="700" fill="#2563EB" fontFamily="Inter,sans-serif">ENTRANCE</text>

      {/* ── Floor badge ── */}
      <rect x="12" y="392" width="124" height="26" rx="6" fill="#1F2937" />
      <text x="74" y="410" textAnchor="middle" fontSize="11" fontWeight="600" fill="#FFFFFF" fontFamily="Inter,sans-serif">Ground Floor</text>

      {/* ── Compass indicator ── */}
      <circle cx="368" cy="28" r="16" fill="white" opacity="0.9" />
      <text x="368" y="23" textAnchor="middle" fontSize="8" fontWeight="700" fill="#2563EB" fontFamily="Inter,sans-serif">N</text>
      <line x1="368" y1="25" x2="368" y2="36" stroke="#9CA3AF" strokeWidth="1.5" strokeLinecap="round"/>

      {/* ── Route line ── */}
      {routePath && (
        <polyline
          points={routePath}
          fill="none"
          stroke="#2563EB"
          strokeWidth="5"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity="0.95"
        />
      )}

      {/* ── Start marker ── */}
      {start && (
        <>
          <circle cx={start.x} cy={start.y} r="11" fill="#10B981" />
          <circle cx={start.x} cy={start.y} r="5" fill="white" />
        </>
      )}

      {/* ── Destination pin + callout ── */}
      {end && end !== start && (
        <>
          {/* Callout label */}
          <rect x={end.x - 54} y={end.y - 46} width="108" height="26" rx="6" fill="#2563EB" />
          <polygon points={`${end.x - 6},${end.y - 20} ${end.x + 6},${end.y - 20} ${end.x},${end.y - 12}`} fill="#2563EB" />
          <text x={end.x} y={end.y - 28} textAnchor="middle" fontSize="10" fontWeight="700" fill="white" fontFamily="Inter,sans-serif">{locationName}</text>
          {/* Pin */}
          <circle cx={end.x} cy={end.y} r="10" fill="#2563EB" stroke="white" strokeWidth="2" />
          <circle cx={end.x} cy={end.y} r="4" fill="white" />
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
