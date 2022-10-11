import React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Dashboard/>,
    },
    {
        path: "login",
        element: <Login/>, // <Route path="login" element={<Login/>} />
    },
]);

export default router;
