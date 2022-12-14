import React from "react";
import {
    createBrowserRouter
} from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import App from "../App";
import ApprenantsPage from "../pages/ApprenantsPage";
import DashboardPage from "../pages/DashboardPage";
import ParentsPage from "../pages/ParentsPage";
import WeeklyCalendarPage from "../pages/WeeklyCalendarPage";
import ProfessorPage from "../pages/ProfessorPage";
import AdminEcolePage from "../pages/AdminEcolePage";
import ClassRoomPage from "../pages/ClassRoomPage";
import MessagePage from "../pages/MessagePage";
import PublicPage from "../pages/PublicPage";
import FacturePage from "../pages/FacturePage";
import SettingsPage from "../pages/SettingsPage";
import NotFound from "../pages/NotFound";
import CoursPage from "../pages/CoursPage";
import ExercicePage from "../pages/ExercicePage";
import NotificationsPage from "../pages/NotificationsPage";

const router = createBrowserRouter([
    {
        path: "",
        element: <App/>,
        children: [
            {
                index: true,
                path: "dashboard",
                element: <DashboardPage/>,
            },
            {
                path: "weekly-calendar",
                element: <WeeklyCalendarPage/>,
            },
            {
                path: "notifications",
                element: <NotificationsPage/>,
            },
            {
                path: "classroom",
                element: <ClassRoomPage/>,
            },
            {
                path: "messages",
                element: <MessagePage/>,
            },
            {
                path: "cours",
                element: <CoursPage/>,
            },
            {
                path: "exercices",
                element: <ExercicePage/>,
            },
            {
                path: "apprenants",
                element: <ApprenantsPage/>,
            },
            {
                path: "professor",
                element: <ProfessorPage/>,
            },
            {
                path: "parents",
                element: <ParentsPage/>,
            },
            {
                path: "admin-ecole",
                element: <AdminEcolePage/>,
            },
            {
                path: "public-page",
                element: <PublicPage/>,
            },
            {
                path: "facture",
                element: <FacturePage/>,
            },
            {
                path: "settings",
                element: <SettingsPage/>,
            },
        ]
    },
    {
        path: "login",
        element: <LoginPage/>,
    },
    {
        path: "*",
        element: <NotFound/>,
    }
], {
    basename: "/"
});

export default router;
