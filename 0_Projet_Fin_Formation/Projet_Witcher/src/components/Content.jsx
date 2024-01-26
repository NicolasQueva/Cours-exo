import React, { useState } from 'react'
import Header from './Header'
import NavBar from './NavBar'
import '../style/content.css'
import { Outlet } from 'react-router-dom'

export default function Content() {
    const [show, setshow] = useState(true)

    return (
        <>
            <header>
                <Header />
                <NavBar show={show}/>
            </header>
            <main>
                <Outlet />
            </main>
        </>
    )
}
