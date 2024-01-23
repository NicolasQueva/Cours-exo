import React from 'react'
import { Link } from 'react-router-dom';
import '../style/NavBar.css'
export default function NavBar() {
    return (
        <>
        <div className="NavBar">
            <Link to="/">Menu</Link> 
            <p className='separator'> | </p>
            <Link to="/personnage">Personnage</Link>
            <p className='separator'> | </p>
            <Link to="/bestiaire">Bestiraire</Link>
        </div>
        </>
    )
}
