import { createBrowserRouter } from 'react-router-dom'
import NavBar from './component/NavBar'
import ErrorPage from './component/ErrorPage'
import Formulaire from './component/Formulaire'
import App from './App'

const router = createBrowserRouter([
    {
        path: "/",
        element: <NavBar />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <App />,
            },
            {
                path: "/form",
                element: <Formulaire />
            }
        ]
    }
])

export default router;