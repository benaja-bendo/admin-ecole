import React from "react";
import {
    createBrowserRouter,
} from "react-router-dom";
import Login from "../pages/Login";
import App from "../App";
import Apprenants from "../pages/Apprenants";
import Dashboard from "../pages/Dashboard";
import Parents from "../pages/Parents";
import WeeklyCalendar from "../pages/WeeklyCalendar";
import Professor from "../pages/Professor";
import AdminEcole from "../pages/AdminEcole";
// import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
    {
        path: "",
        element: <App/>,
        children: [
            {
                index: true,
                path: "dashboard",
                element: <Dashboard/>,
                loader: ({request}) => {
                    console.log(request);
                }
            },
            {
                path: "weekly-calendar",
                element: <WeeklyCalendar/>,
            },
            {
                path: "apprenants",
                element: <Apprenants/>,
            },
            {
                path: "Professor",
                element: <Professor/>,
            },
            {
                path: "admin-ecole",
                element: <AdminEcole/>,
            },
            {
                path: "parents",
                element: <Parents/>,
            },
        ]
    },
    {
        path: "login",
        element: <Login/>,
    },
    {
        path: "*",
        element: <div>404</div>,
    }
], {
    basename: "/"
});

export default router;
