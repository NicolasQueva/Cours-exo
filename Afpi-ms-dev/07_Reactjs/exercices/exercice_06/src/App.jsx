import { useState } from 'react'
import './App.css'
import { Link, Outlet, NavLink } from 'react-router-dom'

function App() {
  return (
    <>
    <div>
      <p>NavBar</p>
      <NavLink classname={({isactive, ispending}) => ispending ? "isPending": isactive ? "active" : ""}></NavLink>
      <Link to={"/"}>Home</Link>
      <Link to={"/contact"}>ContactMe</Link>
      <Link to={"/about"}>about</Link>
    </div>
    <div>
      <Outlet/>
    </div>
    </>
  )
}

export default App
