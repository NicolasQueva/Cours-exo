import React from "react";
import { Link, Outlet } from "react-router-dom";
import './NavBar.css'
const NavBar = () => {
    return (
        <>
            <section id="NavBar">
                <h2>Mon Menu</h2>
                <article>
                    <Link to={"/"} className="link">Home Page </Link>|
                    <Link to={"/Login"} className="link"> Log In </Link>|
                    <Link to={"/content"} className="link"> Content Page </Link>|
                    <Link to={"/contact"} className="link"> Contact </Link>
                </article>
            </section>
            <Outlet />
        </>
    );
}

export default NavBar;