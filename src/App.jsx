import { useState, useEffect } from 'react'
import SplashScreen from './screens/SplashScreen'
import CampusScreen from './screens/CampusScreen'
import SearchScreen from './screens/SearchScreen'
import RoutePreviewScreen from './screens/RoutePreviewScreen'
import NavigationScreen from './screens/NavigationScreen'
import ArrivalScreen from './screens/ArrivalScreen'

const SCREEN_ORDER = ['splash', 'campus', 'search', 'preview', 'navigation', 'arrival']

export default function App() {
  const [screen, setScreen] = useState('splash')
  const [prevScreen, setPrevScreen] = useState(null)
  const [selectedLocation, setSelectedLocation] = useState(null)

  // Auto-advance from splash after 2.2 seconds
  useEffect(() => {
    if (screen === 'splash') {
      const t = setTimeout(() => goTo('campus'), 2200)
      return () => clearTimeout(t)
    }
  }, [screen])

  const goTo = (next) => {
    setPrevScreen(screen)
    setScreen(next)
  }

  const handleSelect = (location) => {
    setSelectedLocation(location)
    goTo('preview')
  }

  const slideDirection = () => {
    if (!prevScreen) return 'slide-in-right'
    const prevIdx = SCREEN_ORDER.indexOf(prevScreen)
    const currIdx = SCREEN_ORDER.indexOf(screen)
    return currIdx >= prevIdx ? 'slide-in-right' : 'slide-in-left'
  }

  const renderScreen = () => {
    switch (screen) {
      case 'splash':
        return <SplashScreen />
      case 'campus':
        return <CampusScreen onEnterBuilding={() => goTo('search')} />
      case 'search':
        return <SearchScreen onSelect={handleSelect} />
      case 'preview':
        return (
          <RoutePreviewScreen
            location={selectedLocation}
            onStart={() => goTo('navigation')}
            onBack={() => goTo('search')}
          />
        )
      case 'navigation':
        return (
          <NavigationScreen
            location={selectedLocation}
            onArrive={() => goTo('arrival')}
          />
        )
      case 'arrival':
        return (
          <ArrivalScreen
            location={selectedLocation}
            onDone={() => goTo('campus')}
          />
        )
      default:
        return null
    }
  }

  return (
    <div className="phone-shell">
      <div key={screen} className={`screen-wrap ${slideDirection()}`}>
        {renderScreen()}
      </div>
    </div>
  )
}
