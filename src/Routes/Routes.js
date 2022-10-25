import { createBrowserRouter } from "react-router-dom";
import Courses from "../components/pages/Courses/Courses/Courses";
import ErrorPage from "../components/pages/ErrorPage/ErrorPage";
import Home from "../components/pages/Home/Home";
import Main from "../components/pages/layout/Main/Main";
import Login from "../components/pages/Login/Login";
import PrivateRoute from "../components/pages/PrivateRoute/PrivateRoute";
import Signup from "../components/pages/Signup/Signup";
import UserProfile from "../components/pages/UserProfile/UserProfile";

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
                loader: () => fetch("http://localhost:5000/courses"),
                element: <Courses></Courses>,
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
                path: "/signup",
                element: <Signup></Signup>,
            },
            {
                path: "/profile",
                element: <UserProfile ></UserProfile>,
            },
            {
                path: "/course/:id",
                loader: ({ params }) => fetch(`http://localhost:5000/course/${params.id}`),
                element: <PrivateRoute><h1>private</h1></PrivateRoute>,
            },



        ]
    }
]) 