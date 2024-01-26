import React from 'react'
import { createBrowserRouter } from "react-router-dom"
import Content from './components/Content';
import ErrorPage from './components/ErrorPage';
import App from './App';
import PersoListe from './components/PersoListe';
import ListeLog from './components/ListeLog';
import BestiaireListe from './components/BestiaireListe';
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
            element: <PersoListe />
        },
        {
            path: "/bestiaire",
            element: <BestiaireListe />
        },
        {
            path: "/login",
            element: <ListeLog />
        }
        ]

    }



])

export default router;