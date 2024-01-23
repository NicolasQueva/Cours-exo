import React from 'react'
import {createBrowserRouter} from "react-router-dom"
import Content from './components/Content';
import ErrorPage from './components/ErrorPage';
import App from './App';
import Personnage from './components/Personnage';
import Bestiaire from './components/Bestiaire';
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
            element: <Personnage />
        },
        {
            path: "/bestiaire",
            element: <Bestiaire />
        }
        ]

    }



])

export default router;