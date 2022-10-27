import {Outlet, useMatches, useNavigate} from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import Layout from "./components/Layout/Layout";
import {BubbleLoading} from "./icons/BubbleLoading";
import useIsconnect from "./hooks/useIsconnect";
import {CssBaseline} from "@mui/material";
import {CssVarsProvider} from '@mui/joy/styles';
import React from "react";

export default function App() {
    const [isConnect] = useIsconnect();
    if (isConnect === null) {
        return <div className="h-screen w-full grid place-items-center">
            <BubbleLoading className="h-14 w-14"/>
        </div>;
    }
    return (isConnect ?
        <CssVarsProvider>
            <CssBaseline/>
            <Layout>
                <Outlet/>
            </Layout>
        </CssVarsProvider>
        :
        <LoginPage/>);
}
