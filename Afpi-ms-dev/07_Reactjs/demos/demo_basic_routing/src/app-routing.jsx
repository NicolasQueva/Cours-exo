import {createBrowserRouter} from "react-router-dom"
import NavBar from "./components/NavBar"
import ErrorPage from "./components/ErrorPage"
import App from "./App"
import Form from "./components/Form"

const router = createBrowserRouter([
    {
        path: "/",
        element: <NavBar />,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <App/>
            },
            {
                path: "/form",
                element: <Form />
            }
        ]
    }
])

export default router