import { createBrowserRouter } from "react-router-dom";
import CourseDetails from "../components/pages/Courses/CourseDetails/CourseDetails";
import Courses from "../components/pages/Courses/Courses/Courses";
import ErrorPage from "../components/pages/ErrorPage/ErrorPage";
import Home from "../components/pages/Home/Home";
import Main from "../components/pages/layout/Main/Main";
import Login from "../components/pages/Login/Login";
import PremiumAccess from "../components/pages/PremiumAccess/PremiumAccess";
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
                loader: () => fetch("https://b610-learning-platform-server-nabinchowdhury.vercel.app/courses"),
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
                element: <PrivateRoute><UserProfile ></UserProfile></PrivateRoute>,
            },
            {
                path: "/course/:id",
                loader: ({ params }) => fetch(`https://b610-learning-platform-server-nabinchowdhury.vercel.app/course/${params.id}`),
                element: <CourseDetails></CourseDetails>,
            },
            {
                path: "/premiumCheckout/:id",
                loader: ({ params }) => fetch(`https://b610-learning-platform-server-nabinchowdhury.vercel.app/course/${params.id}`),
                element: <PrivateRoute><PremiumAccess></PremiumAccess></PrivateRoute>,
            },



        ]
    }
]) 