import { helixRoutes, defaultDemoRoute } from '../data/routes'

const CheckIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export default function ArrivalScreen({ location, onDone }) {
  const route = helixRoutes[location?.id] ?? defaultDemoRoute

  return (
    <div style={styles.container}>
      {/* Background gradient */}
      <div style={styles.gradientBg} />

      {/* Decorative circles */}
      <div style={styles.circle1} />
      <div style={styles.circle2} />

      {/* Content */}
      <div style={styles.content}>

        {/* YOU'VE ARRIVED badge */}
        <div style={styles.arrivedBadge}>
          <CheckIcon />
          <span style={styles.arrivedText}>YOU'VE ARRIVED</span>
        </div>

        {/* Pin icon */}
        <div style={styles.pinCircle}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="white" stroke="none">
            <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z" />
            <circle cx="12" cy="9" r="2.8" fill="rgba(37,99,235,0.9)" stroke="none" />
          </svg>
        </div>

        {/* Confirmation label + name */}
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

        {/* Done */}
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  gradientBg: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(160deg, #1D4ED8 0%, #1E40AF 45%, #1E3A8A 100%)',
  },
  // Decorative soft glowing circles
  circle1: {
    position: 'absolute',
    width: 320,
    height: 320,
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.06)',
    top: -80,
    right: -80,
  },
  circle2: {
    position: 'absolute',
    width: 240,
    height: 240,
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.05)',
    bottom: 40,
    left: -80,
  },
  content: {
    position: 'relative',
    zIndex: 1,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0 28px 40px',
  },
  arrivedBadge: {
    display: 'flex',
    alignItems: 'center',
    gap: 8,
    background: 'white',
    borderRadius: 24,
    padding: '10px 20px',
    marginBottom: 36,
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
    animation: 'badgeDrop 0.5s ease forwards',
  },
  arrivedText: {
    fontSize: 13,
    fontWeight: 700,
    color: '#2563EB',
    letterSpacing: '0.8px',
    fontFamily: 'Inter, sans-serif',
  },
  pinCircle: {
    width: 96,
    height: 96,
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.18)',
    border: '2px solid rgba(255,255,255,0.3)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 28,
    animation: 'pinBounce 0.7s cubic-bezier(0.36, 0.07, 0.19, 0.97) 0.1s both',
  },
  confirmationLabel: {
    fontSize: 11,
    fontWeight: 600,
    color: 'rgba(255,255,255,0.6)',
    letterSpacing: '1.2px',
    marginBottom: 10,
    fontFamily: 'Inter, sans-serif',
    animation: 'fadeSlideUp 0.5s ease 0.3s both',
  },
  destinationName: {
    fontSize: 30,
    fontWeight: 700,
    color: '#ffffff',
    textAlign: 'center',
    letterSpacing: '-0.5px',
    lineHeight: 1.2,
    marginBottom: 8,
    fontFamily: 'Inter, sans-serif',
    animation: 'fadeSlideUp 0.5s ease 0.35s both',
  },
  destinationSubtitle: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.65)',
    textAlign: 'center',
    marginBottom: 36,
    fontFamily: 'Inter, sans-serif',
    animation: 'fadeSlideUp 0.5s ease 0.4s both',
  },
  statsRow: {
    display: 'flex',
    gap: 14,
    marginBottom: 36,
    width: '100%',
    animation: 'fadeSlideUp 0.5s ease 0.45s both',
  },
  statCard: {
    flex: 1,
    background: 'rgba(255,255,255,0.14)',
    border: '1px solid rgba(255,255,255,0.2)',
    borderRadius: 18,
    padding: '18px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 6,
  },
  statLabel: {
    fontSize: 10,
    fontWeight: 600,
    color: 'rgba(255,255,255,0.6)',
    letterSpacing: '0.8px',
    fontFamily: 'Inter, sans-serif',
  },
  statValue: {
    fontSize: 24,
    fontWeight: 700,
    color: '#ffffff',
    fontFamily: 'Inter, sans-serif',
  },
  doneBtn: {
    width: '100%',
    padding: '16px 0',
    background: '#ffffff',
    color: '#1D4ED8',
    border: 'none',
    borderRadius: 16,
    fontSize: 17,
    fontWeight: 700,
    cursor: 'pointer',
    fontFamily: 'Inter, sans-serif',
    letterSpacing: '-0.2px',
    boxShadow: '0 4px 20px rgba(0,0,0,0.15)',
    animation: 'fadeSlideUp 0.5s ease 0.5s both',
  },
}
