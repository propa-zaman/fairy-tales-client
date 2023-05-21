import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import Error from "../pages/Error/Error";
import Login from "../pages/Login/Login";
import SignUp from "../pages/SignUp/SignUp";
import AddToy from "../pages/AddToy/AddToy";
import ToyDetails from "../pages/ToyDetails/ToyDetails";
import MyToys from "../pages/MyToys/MyToys";
import Blog from "../pages/Blog/Blog";
import AllToys from "../pages/AllToys/AllToys";
import PrivateRoute from "./PrivateRoute"




const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "addtoy",
                element: <AddToy></AddToy>
            },
            {
                path: "toydetails",
                element: <ToyDetails></ToyDetails>
            },
            {
                path: "alltoys",
                element: <AllToys></AllToys>
            },
            {
                path: "/toys/:id",
                element: <PrivateRoute><ToyDetails></ToyDetails></PrivateRoute>
            },
            {
                path: "mytoys",
                element: <MyToys></MyToys>
            },
            {
                path: "blog",
                element: <Blog></Blog>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <SignUp></SignUp>
            }
        ]
    },
    {
        path: "error",
        element: <Error></Error>
    }
]);

export default router;