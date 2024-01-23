import React from 'react';
import { Outlet, Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <>
            <h4>Mon menu</h4>
            <Link to="/">HomePage</Link>
            <Link to="/form">FormPage</Link>
            <Outlet/>
        </>
      );
}
 
export default NavBar;