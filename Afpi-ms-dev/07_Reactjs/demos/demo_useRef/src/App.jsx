import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [user, setUser] = useState({
    firstname: "",
    lastname: ""
  })
  const firstnameRef = useRef()
  const lastnameRef = useRef()

  const getValueFromInput = () => {
    const firstname = firstnameRef.current.value
    const lastname = lastnameRef.current.value
    setUser({firstname, lastname})
  }

  return (
    <>
     <label htmlFor="firstname">Firstname :</label>
     <input type="text" ref={firstnameRef} />
     <label htmlFor="lastname">LastName :</label>
     <input type="text" ref={lastnameRef}/>
     <button onClick={getValueFromInput} >Valider</button>
     <h2>Bonjour {user.firstname} {user.lastname} !!!</h2>
    </>
  )
}

export default App
