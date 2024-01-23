import { useState } from 'react'
import './App.css'
import LoginForm from './components/LoginForm';

function App() {
  const [user, setUser] = useState()

  const displayLog = (infos) => {
    setUser(infos);
  }

  return (
    <>
      <LoginForm displayLog={displayLog} />
      {user ? <h1>Bonjour {user.email}</h1> : ""}
    </>
  )
}

export default App
