import React from 'react'
import Header from './Header'
import NavBar from './NavBar'
import '../style/content.css'
import { Outlet } from 'react-router-dom'

export default function Content() {
    return (
        <>
            <header>
                <Header />
                <NavBar />
            </header>
            <main>
                <Outlet/>
            </main>
        </>
    )
}
