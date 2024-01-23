import { createBrowserRouter } from "react-router-dom";
import NavBar from "./component/NavBar";
import App from "./App";
import ErrorPage from "./component/ErrorPage"
import Content from "./component/Content";
import Contact from "./component/Contact"
import Login from "./component/Login";
const router = createBrowserRouter([
    {
        path: "/",
        element: <NavBar />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <App />
            },
            {
                path: "/content",
                element: <Content />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/contact",
                element: <Contact />
            }
        ]

    }
])

export default router;