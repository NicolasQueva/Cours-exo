import React from 'react'
import Formulaire from './components/Formulaire';

export default function App() {
  function login(userref, mdpref) {
    console.log(`Bienvenue ${userref}, votre mdp est ${mdpref}`);
  }
  return (
    <>
      <Formulaire login = {login} />
    </>
  )
}

