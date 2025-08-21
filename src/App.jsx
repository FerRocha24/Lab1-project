import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HolaMundo from './HolaMundo'
import Variables from './Variables'
import AirportsList from './AirportsList'

function App() {
  return (
    <>
      <HolaMundo />
      <Variables />
      <AirportsList />
    </>
  )
}

export default App
