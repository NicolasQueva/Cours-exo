import React from 'react'
import {createBrowserRouter} from "react-router-dom"
import Content from './components/Content';
import ErrorPage from './components/ErrorPage';
import App from './App';
import Bestiaire from './components/Bestiaire';
import PersoListe from './components/PersoListe';
const router = createBrowserRouter([
    {
        path: "/",
        element: <Content />,
        error: <ErrorPage />,
        children: [{
            path: "/",
            element: <App />
        },
        {
            path: "/personnage",
            element: <PersoListe/>
        },
        {
            path: "/bestiaire",
            element: <Bestiaire />
        }
        ]

    }



])

export default router;