import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MysteryNumber from './components/MysteryNumber'

function App() {

  return (
    <>
      <MysteryNumber mysteryNumber={30} />
    </>
  )
}

export default App
