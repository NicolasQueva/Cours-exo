import { useState } from 'react'
import './App.css'
import wolf from './img/wolf.jpg'

function App() {
  console.log(wolf);
  const [count, setCount] = useState(0)
  return (
    <>
     <h1>Bievenue sur mon site ! </h1>
     <img src={wolf} alt="Logo Du loup Witcher" className='Loup'/>
    </>
  )
}

export default App
