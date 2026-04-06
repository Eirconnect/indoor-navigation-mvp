import { helixRoutes, defaultDemoRoute } from '../data/routes'

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const PinIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="white" stroke="white" strokeWidth="1">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
    <circle cx="12" cy="9" r="2.5" fill="#2563EB" stroke="none" />
  </svg>
)

export default function ArrivalScreen({ location, onDone }) {
  const route = helixRoutes[location?.id] ?? defaultDemoRoute

  return (
    <div style={styles.container}>
      {/* Muted map background */}
      <div style={styles.mapBackground}>
        <svg width="100%" height="100%" viewBox="0 0 390 440" preserveAspectRatio="xMidYMid slice">
          <rect x="0" y="0" width="390" height="440" fill="#CDD0D5" />
          <rect x="165" y="20" width="60" height="360" fill="#C4C7CC" />
          <rect x="20" y="185" width="350" height="60" fill="#C4C7CC" />
          <rect x="20" y="20" width="138" height="160" rx="4" fill="#D8DADD" stroke="#BBC0C7" strokeWidth="1" />
          <rect x="232" y="20" width="138" height="160" rx="4" fill="#D8DADD" stroke="#BBC0C7" strokeWidth="1" />
          <rect x="20" y="252" width="138" height="100" rx="4" fill="#D8DADD" stroke="#BBC0C7" strokeWidth="1" />
          <rect x="232" y="252" width="138" height="100" rx="4" fill="#D8DADD" stroke="#BBC0C7" strokeWidth="1" />
          <circle cx="195" cy="215" r="24" fill="#C8CBD0" stroke="#B5BAC0" strokeWidth="1.5" />
          <rect x="148" y="383" width="94" height="44" rx="4" fill="#C8CBD0" stroke="#B5BAC0" strokeWidth="1" />
        </svg>
        {/* Overlay to mute the map further */}
        <div style={styles.mapOverlay} />
      </div>

      {/* Content */}
      <div style={styles.content}>

        {/* YOU'VE ARRIVED badge */}
        <div style={styles.arrivedBadge}>
          <CheckIcon />
          <span style={styles.arrivedText}>YOU'VE ARRIVED</span>
        </div>

        {/* Large pin icon */}
        <div style={styles.pinCircle}>
          <PinIcon />
        </div>

        {/* Confirmation text */}
        <span style={styles.confirmationLabel}>ARRIVAL CONFIRMATION</span>
        <span style={styles.destinationName}>{location?.name ?? 'Destination'}</span>
        <span style={styles.destinationSubtitle}>{location?.subtitle ?? ''}</span>

        {/* Stats */}
        <div style={styles.statsRow}>
          <div style={styles.statCard}>
            <span style={styles.statLabel}>DURATION</span>
            <span style={styles.statValue}>{route.totalTime} min</span>
          </div>
          <div style={styles.statCard}>
            <span style={styles.statLabel}>DISTANCE</span>
            <span style={styles.statValue}>{route.totalDistance}</span>
          </div>
        </div>

        {/* Done button */}
        <button style={styles.doneBtn} onClick={onDone}>
          Done
        </button>
      </div>
    </div>
  )
}

const styles = {
  container: {
    position: 'relative',
    height: '100%',
    overflow: 'hidden',
    background: '#D6D9DE',
  },
  mapBackground: {
    position: 'absolute',
    inset: 0,
  },
  mapOverlay: {
    position: 'absolute',
    inset: 0,
    background: 'rgba(209, 213, 219, 0.55)',
  },
  content: {
    position: 'relative',
    zIndex: 1,
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '0 28px 40px',
    gap: 0,
  },
  arrivedBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    background: 'white',
    borderRadius: 24,
    padding: '10px 20px',
    marginBottom: 28,
    boxShadow: '0 2px 12px rgba(0,0,0,0.12)',
  },
  arrivedText: {
    fontSize: 13,
    fontWeight: 700,
    color: '#2563EB',
    letterSpacing: '0.8px',
    fontFamily: 'Inter, sans-serif',
  },
  pinCircle: {
    width: 80,
    height: 80,
    borderRadius: '50%',
    background: '#2563EB',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 24,
    boxShadow: '0 8px 32px rgba(37,99,235,0.35)',
  },
  confirmationLabel: {
    fontSize: 11,
    fontWeight: 600,
    color: '#6B7280',
    letterSpacing: '1px',
    marginBottom: 8,
    fontFamily: 'Inter, sans-serif',
  },
  destinationName: {
    fontSize: 28,
    fontWeight: 700,
    color: '#2563EB',
    textAlign: 'center',
    letterSpacing: '-0.5px',
    lineHeight: 1.2,
    marginBottom: 6,
    fontFamily: 'Inter, sans-serif',
  },
  destinationSubtitle: {
    fontSize: 13,
    color: '#6B7280',
    textAlign: 'center',
    marginBottom: 32,
    fontFamily: 'Inter, sans-serif',
  },
  statsRow: {
    display: 'flex',
    gap: 14,
    marginBottom: 36,
    width: '100%',
  },
  statCard: {
    flex: 1,
    background: 'white',
    borderRadius: 16,
    padding: '16px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
  },
  statLabel: {
    fontSize: 10,
    fontWeight: 600,
    color: '#9CA3AF',
    letterSpacing: '0.8px',
    fontFamily: 'Inter, sans-serif',
  },
  statValue: {
    fontSize: 22,
    fontWeight: 700,
    color: '#111827',
    fontFamily: 'Inter, sans-serif',
  },
  doneBtn: {
    width: '100%',
    padding: '16px 0',
    background: '#2563EB',
    color: '#ffffff',
    border: 'none',
    borderRadius: 16,
    fontSize: 17,
    fontWeight: 600,
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    letterSpacing: '-0.2px',
    boxShadow: '0 4px 16px rgba(37,99,235,0.30)',
  },
}
