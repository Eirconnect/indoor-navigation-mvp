import { useState } from 'react'
import SearchScreen from './screens/SearchScreen'
import RoutePreviewScreen from './screens/RoutePreviewScreen'
import NavigationScreen from './screens/NavigationScreen'
import ArrivalScreen from './screens/ArrivalScreen'

export default function App() {
  const [screen, setScreen] = useState('search')
  const [selectedLocation, setSelectedLocation] = useState(null)

  const handleSelect = (location) => {
    setSelectedLocation(location)
    setScreen('preview')
  }

  const handleStartNavigation = () => {
    setScreen('navigation')
  }

  const handleArrive = () => {
    setScreen('arrival')
  }

  const handleDone = () => {
    setSelectedLocation(null)
    setScreen('search')
  }

  const handleBack = () => {
    setScreen('search')
  }

  return (
    <div className="phone-shell">
      {screen === 'search' && (
        <SearchScreen onSelect={handleSelect} />
      )}
      {screen === 'preview' && (
        <RoutePreviewScreen
          location={selectedLocation}
          onStart={handleStartNavigation}
          onBack={handleBack}
        />
      )}
      {screen === 'navigation' && (
        <NavigationScreen
          location={selectedLocation}
          onArrive={handleArrive}
        />
      )}
      {screen === 'arrival' && (
        <ArrivalScreen
          location={selectedLocation}
          onDone={handleDone}
        />
      )}
    </div>
  )
}
