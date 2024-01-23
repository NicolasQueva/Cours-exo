import { useState } from 'react'
import './App.css'
import { data } from './data'
import { Link } from 'react-router-dom'

function App() {

  return (
    <>
    <h1>Mon eCommerce</h1>
      {
        data.map((element) => (
          <Link to={`/elements/${element.id}`} key={element.id}>{element.nom} </Link>
        ))
      }
    </>
  )
}

export default App
