import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../style/NavBar.css'
export default function NavBar() {
    const [show, setshow] = useState(localStorage.getItem("Log"));

   
    console.log(show);


    return (
        <>
            
            <div className="NavBar">
                <Link to="/">Menu</Link>
                {show == "true" ?<p className='separator'> | </p>: ""}
                {show == "true" ? <Link to="/personnage">Personnage</Link>: ""}
                {show == "true" ?<p className='separator'> | </p>: ""}
                {show == "true" ?<Link to="/bestiaire" id="BeastNav">Bestiaire</Link>: ""}
                <p className='separator'> | </p>
                <Link to="/login">LogIn</Link>

            </div>
        </>
    )
}
