import {useEffect, useState} from "react";
import useLocalStorage from "./useLocalStorage";
import http from "../services/http";
import {useLocation, useMatches, useNavigate} from "react-router-dom";
import {User} from "../models/User";

const useAuth = () => {
    const [token, setToken] = useLocalStorage("access_token", "");
    const [user, setUser] = useState({} as User);
    const [loadingLogin, setLoadingLogin] = useState(false);
    const [errorLogin, setErrorLogin] = useState(null as string | null);
    const navigate = useNavigate();

    const logout = async () => {
        await http.post("/logout").then(() => {
            setToken("");
            setUser({} as User);
            // setIsConnect(false);
        });
    };

    const login = async (email: string, password: string) => {
        setLoadingLogin(true);
        try {
            const res = await http.post("/login", {email, password});
            setUser(res.data.data.user);
            setToken(res.data.data.access_token);
            navigate('/dashboard');
            setErrorLogin(null);
        } catch (e) {
            setErrorLogin('Identifiants incorrect');
        }
        setLoadingLogin(false);
    };

    /*useEffect(() => {
        const fetchUser = async () => {
            try {
                const res = await http.get("/me", {
                    headers: {
                        Authorization: "Bearer " + token
                    }
                });
                setUser(res.data);
                setIsConnect(true);
                setErrorLogin(null);
            } catch (e) {
                setErrorLogin("Une erreur est survenue");
                setIsConnect(false);
            }
            setLoadingLogin(false);
        };
        fetchUser();

    }, [token]);*/

    return {
        user,
        loadingLogin,
        errorLogin,
        logout,
        login,
        token
    };
};

export default useAuth;
