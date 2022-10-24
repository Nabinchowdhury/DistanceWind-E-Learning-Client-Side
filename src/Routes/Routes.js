import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/pages/ErrorPage/ErrorPage";
import Home from "../components/pages/Home/Home";
import Main from "../components/pages/layout/Main/Main";
import Login from "../components/pages/Login/Login";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "/courses",
                element: <h1>hi</h1>,
            },
            {
                path: "/FAQ",
                element: <h1>hi</h1>,
            },
            {
                path: "/blogs",
                element: <h1>hi</h1>,
            },
            {
                path: "/login",
                element: <Login></Login>,
            },
            {
                path: "/register",
                element: <h1>hi</h1>,
            },

        ]
    }
]) 