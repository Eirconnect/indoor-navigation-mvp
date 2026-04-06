import { useState, useEffect, useRef } from 'react'
import { helixRoutes, defaultDemoRoute } from '../data/routes'
import { getPositionAtProgress, getCurrentStepIndex } from '../utils/pathAnimator'
import IndoorMap from '../components/IndoorMap'

const DEMO_DURATION_MS = 10000 // 10 seconds for full demo route

// ─── Direction icons ──────────────────────────────────────────────────────────

const ArrowUp = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
)

const ArrowLeft = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
  </svg>
)

const ArrowRight = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="5" y1="12" x2="19" y2="12" />
    <polyline points="12 5 19 12 12 19" />
  </svg>
)

const StairsIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#2563EB" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="5 19 5 14 10 14 10 9 15 9 15 5 19 5" />
  </svg>
)

const ArriveIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

const directionIcon = {
  enter:    <ArrowUp />,
  straight: <ArrowUp />,
  left:     <ArrowLeft />,
  right:    <ArrowRight />,
  stairs:   <StairsIcon />,
  arrive:   <ArriveIcon />,
}

const directionBg = {
  arrive: '#ECFDF5',
  default: '#EFF6FF',
}

// ─── Screen ───────────────────────────────────────────────────────────────────

export default function NavigationScreen({ location, onArrive }) {
  const [progress, setProgress] = useState(0)
  const rafRef = useRef(null)
  const startTimeRef = useRef(null)

  const route = helixRoutes[location?.id] ?? defaultDemoRoute
  const { waypoints, steps, totalTime } = route

  // Animate progress from 0 → 1 over DEMO_DURATION_MS
  useEffect(() => {
    startTimeRef.current = performance.now()

    const tick = (now) => {
      const elapsed = now - startTimeRef.current
      const p = Math.min(elapsed / DEMO_DURATION_MS, 1)
      setProgress(p)

      if (p < 1) {
        rafRef.current = requestAnimationFrame(tick)
      } else {
        setTimeout(onArrive, 1200)
      }
    }

    rafRef.current = requestAnimationFrame(tick)
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current)
    }
  }, [])

  const userPosition = getPositionAtProgress(waypoints, progress)
  const stepIndex = getCurrentStepIndex(steps, progress)
  const currentStep = steps[stepIndex] ?? steps[steps.length - 1]
  const timeRemaining = Math.max(1, Math.ceil((1 - progress) * totalTime))
  const isArriving = progress > 0.92

  // Floor level based on route
  const floorLevels = ['GF', 'L1', 'L2']
  const activeFloor = route.floor === 'Level 1' && progress > 0.7 ? 'L1' : 'GF'

  return (
    <div style={styles.container}>
      {/* Turn instruction card */}
      <div style={styles.instructionCard}>
        <div style={{
          ...styles.iconBox,
          background: isArriving ? directionBg.arrive : directionBg.default,
        }}>
          {directionIcon[isArriving ? 'arrive' : currentStep?.icon] ?? <ArrowUp />}
        </div>
        <div style={styles.instructionText}>
          <span style={styles.instructionMain}>
            {isArriving ? `You're almost there` : currentStep?.instruction}
          </span>
          <span style={styles.instructionDetail}>
            {isArriving ? `${location?.name} is just ahead` : currentStep?.detail}
          </span>
        </div>
      </div>

      {/* Map — navigation mode (userPosition triggers animated pulsing dot) */}
      <div style={styles.mapContainer}>
        <IndoorMap
          route={route}
          locationName={location?.name ?? 'Destination'}
          userPosition={userPosition}
          floor={activeFloor === 'L1' ? 'Level 1' : 'Ground Floor'}
        />

        {/* Floor level selector */}
        <div style={styles.floorSelector}>
          {['L2', 'L1', 'GF'].map(level => (
            <button
              key={level}
              style={{
                ...styles.floorBtn,
                background: activeFloor === level ? '#2563EB' : '#ffffff',
                color: activeFloor === level ? '#ffffff' : '#6B7280',
                fontWeight: activeFloor === level ? 700 : 500,
              }}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      {/* Bottom sheet */}
      <div style={styles.bottomSheet}>
        <div style={styles.handle} />

        <div style={styles.bottomRow}>
          <div>
            <span style={styles.timeRemaining}>{timeRemaining}</span>
            <span style={styles.minLabel}> min</span>
          </div>
          <button style={styles.endBtn} onClick={onArrive}>END</button>
        </div>

        {/* Progress bar */}
        <div style={styles.progressTrack}>
          <div style={{ ...styles.progressFill, width: `${progress * 100}%` }} />
        </div>
        <div style={styles.progressLabels}>
          <span style={styles.progressLabelStart}>START</span>
          <span style={styles.progressLabelEnd}>{location?.name?.toUpperCase() ?? 'DESTINATION'}</span>
        </div>
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
  instructionCard: {
    display: 'flex',
    alignItems: 'center',
    gap: 14,
    margin: '14px 16px 0',
    padding: '14px 16px',
    background: '#ffffff',
    borderRadius: 18,
    boxShadow: '0 2px 16px rgba(0,0,0,0.10)',
    flexShrink: 0,
    zIndex: 10,
  },
  iconBox: {
    width: 52,
    height: 52,
    borderRadius: 14,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
  },
  instructionText: {
    display: 'flex',
    flexDirection: 'column',
    gap: 3,
    flex: 1,
  },
  instructionMain: {
    fontSize: 17,
    fontWeight: 700,
    color: '#111827',
    lineHeight: 1.2,
  },
  instructionDetail: {
    fontSize: 13,
    color: '#6B7280',
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
    overflow: 'hidden',
    background: '#D6D9DE',
    display: 'flex',
    alignItems: 'center',
  },
  floorSelector: {
    position: 'absolute',
    right: 14,
    top: '50%',
    transform: 'translateY(-50%)',
    display: 'flex',
    flexDirection: 'column',
    gap: 6,
  },
  floorBtn: {
    width: 42,
    height: 42,
    borderRadius: 12,
    border: '1px solid #E5E7EB',
    cursor: 'pointer',
    fontSize: 12,
    fontFamily: 'inherit',
    boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
  },
  bottomSheet: {
    background: '#ffffff',
    borderRadius: '24px 24px 0 0',
    padding: '12px 24px 24px',
    boxShadow: '0 -4px 24px rgba(0,0,0,0.10)',
    flexShrink: 0,
  },
  handle: {
    width: 40,
    height: 4,
    background: '#E5E7EB',
    borderRadius: 2,
    margin: '0 auto 16px',
  },
  bottomRow: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
  },
  timeRemaining: {
    fontSize: 38,
    fontWeight: 700,
    color: '#111827',
    letterSpacing: '-1px',
  },
  minLabel: {
    fontSize: 18,
    fontWeight: 500,
    color: '#6B7280',
  },
  endBtn: {
    background: '#2563EB',
    color: '#ffffff',
    border: 'none',
    borderRadius: 14,
    padding: '12px 28px',
    fontSize: 15,
    fontWeight: 700,
    cursor: 'pointer',
    fontFamily: 'inherit',
    letterSpacing: '0.5px',
  },
  progressTrack: {
    height: 6,
    background: '#F3F4F6',
    borderRadius: 3,
    overflow: 'hidden',
    marginBottom: 8,
  },
  progressFill: {
    height: '100%',
    background: '#2563EB',
    borderRadius: 3,
    transition: 'width 0.1s linear',
  },
  progressLabels: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  progressLabelStart: {
    fontSize: 11,
    fontWeight: 600,
    color: '#9CA3AF',
    letterSpacing: '0.5px',
  },
  progressLabelEnd: {
    fontSize: 11,
    fontWeight: 600,
    color: '#9CA3AF',
    letterSpacing: '0.5px',
    maxWidth: 160,
    textAlign: 'right',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
}
