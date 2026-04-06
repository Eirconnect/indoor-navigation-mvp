export default function SplashScreen() {
  return (
    <div style={styles.container}>
      <div style={styles.gradientBg} />
      <div style={styles.circle1} />
      <div style={styles.circle2} />

      <div style={styles.content}>
        {/* Logo mark */}
        <div style={styles.logoMark}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="3" />
            <path d="M12 2v3M12 19v3M2 12h3M19 12h3" />
            <path d="M5.64 5.64l2.12 2.12M16.24 16.24l2.12 2.12M5.64 18.36l2.12-2.12M16.24 7.76l2.12-2.12" />
          </svg>
        </div>

        <h1 style={styles.title}>Wayfinder</h1>
        <p style={styles.subtitle}>DCU Campus Navigation</p>
      </div>

      <p style={styles.footer}>Powered by Eirconnect</p>
    </div>
  )
}

const styles = {
  container: {
    position: 'relative',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  gradientBg: {
    position: 'absolute',
    inset: 0,
    background: 'linear-gradient(160deg, #1D4ED8 0%, #1E40AF 50%, #1E3A8A 100%)',
  },
  circle1: {
    position: 'absolute',
    width: 350,
    height: 350,
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.06)',
    top: -80,
    right: -80,
  },
  circle2: {
    position: 'absolute',
    width: 260,
    height: 260,
    borderRadius: '50%',
    background: 'rgba(255,255,255,0.05)',
    bottom: 60,
    left: -80,
  },
  content: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
  },
  logoMark: {
    width: 80,
    height: 80,
    borderRadius: 24,
    background: 'rgba(255,255,255,0.15)',
    border: '1.5px solid rgba(255,255,255,0.25)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 8,
    animation: 'pinBounce 0.7s cubic-bezier(0.36,0.07,0.19,0.97) 0.1s both',
  },
  title: {
    fontSize: 36,
    fontWeight: 800,
    color: 'white',
    letterSpacing: '-1px',
    fontFamily: 'Inter, sans-serif',
    animation: 'fadeSlideUp 0.5s ease 0.3s both',
  },
  subtitle: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.7)',
    fontFamily: 'Inter, sans-serif',
    fontWeight: 500,
    animation: 'fadeSlideUp 0.5s ease 0.4s both',
  },
  footer: {
    position: 'absolute',
    bottom: 36,
    fontSize: 12,
    color: 'rgba(255,255,255,0.45)',
    fontFamily: 'Inter, sans-serif',
    zIndex: 1,
  },
}
