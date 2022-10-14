import * as React from "react";
import {Button} from "@mui/joy";
import {LogoutIcon} from "../icons/Logouticon";
import {useNavigate} from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function ButtonLogout() {
    const {logout} = useAuth();
    const navigate = useNavigate();

    const handleLogout = async () => {
        await logout();
        navigate('/login');
    }
    return (
        <Button
            className="flex items-center gap-2 px-4 py-2 rounded-md bg-red-500 text-white"
            onClick={handleLogout}
        >
            <LogoutIcon/>
            <span>Logout</span>
        </Button>
    );
}