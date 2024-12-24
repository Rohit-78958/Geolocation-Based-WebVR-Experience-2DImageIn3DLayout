import React, { useState, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import GlobeScene from './components/ModelComponents/Globe'
import PlantScene from './components/PlantScene'
import Loader from './components/Loader'
import CityMap from './components/CityComponent'

function SceneManager({ currentScene, selectedCity, selectedPlant, onCitySelect, onPlantSelect, onBack }) {
  switch (currentScene) {
    case 'globe':
      return <GlobeScene onCitySelect={onCitySelect} />
    case 'city':
      return selectedCity ? (
        <CityMap 
          city={selectedCity}
          onBack={onBack}
          onPlantSelect={onPlantSelect}
        />
      ) : null
    case 'plant':
      return selectedPlant ? (
        <PlantScene 
          plant={selectedPlant}
          onBack={onBack}
        />
      ) : null
    default:
      return null
  }
}

function App() {
  const [currentScene, setCurrentScene] = useState('globe')
  const [selectedCity, setSelectedCity] = useState(null)
  const [selectedPlant, setSelectedPlant] = useState(null)

  const handleCitySelect = (city) => {
    setSelectedCity(city)
    setCurrentScene('city')
  }

  const handlePlantSelect = (plant) => {
    setSelectedPlant(plant)
    setCurrentScene('plant')
  }

  const handleBack = () => {
    switch (currentScene) {
      case 'city':
        setCurrentScene('globe')
        setSelectedCity(null)
        break
      case 'plant':
        setCurrentScene('city')
        setSelectedPlant(null)
        break
    }
  }

  return (
    <Canvas
      style={{ height: '100vh', width: '100vw', background: 'black' }}
      gl={{ 
        powerPreference: "high-performance",
        antialias: true,
        logarithmicDepthBuffer: true,
      }}
    >
      <Suspense fallback={<Loader />}>
        <SceneManager
          currentScene={currentScene}
          selectedCity={selectedCity}
          selectedPlant={selectedPlant}
          onCitySelect={handleCitySelect}
          onPlantSelect={handlePlantSelect}
          onBack={handleBack}
        />
      </Suspense>
    </Canvas>
  )
}

export default App