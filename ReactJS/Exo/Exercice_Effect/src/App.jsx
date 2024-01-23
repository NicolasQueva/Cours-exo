import { useState } from 'react'
import './App.css'
import Calcul from './components/Calcul'

function App() {
  const number = 72
  return (
    <>
      <Calcul number={number}/>
    </>
  )
}

export default App
