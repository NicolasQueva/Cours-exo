import React from 'react'
import { Link, Outlet } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <h4>Mon menu</h4>
            <Link to={"/"}>Home Page</Link>
            <Link to={"/form"}>Form Page</Link>
            <Outlet/>
        </>
    )
}

export default NavBar; 