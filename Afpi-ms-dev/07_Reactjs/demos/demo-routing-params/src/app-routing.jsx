import {createBrowserRouter} from "react-router-dom"
import Element from "./components/Element"
import App from "./App"

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>
    },
    {
        path: "/elements/:id",
        element: <Element />
    }
])

export default router