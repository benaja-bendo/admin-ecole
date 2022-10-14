import {createContext, ReactNode, useEffect, useMemo, useState} from "react";
import {useLocation, useMatches, useNavigate} from "react-router-dom";
import http from "../services/http";
import {AuthContextType} from "../types/AuthContextType";


const AuthContext = createContext<AuthContextType>({} as AuthContextType);

export function AuthProvider({children}: { children: ReactNode; }): JSX.Element {
    const [isConnect, setIsConnect] = useState(null as boolean | null);
    const [error, setError] = useState(null as string | null);

    const location = useLocation();
    const matches = useMatches();
    const navigate = useNavigate();

    if (matches.length == 1 && matches[0].pathname == '/' && isConnect) {//&& isConnect
        navigate('/dashboard');
    }
    useEffect(() => {
        http.get('/me').then((response) => {
            console.log('response me', response);
            setIsConnect(true);
        }).catch((error) => {
            console.error('error', error);
            setIsConnect(false);
            navigate('/login');
        });
        return () => {
            setIsConnect(null);
        }
    }, []);

    useEffect(() => {
        if (error) setError(null);
    }, [location.pathname]);

    /*const login = async (email: string, password: string) => {
        setLoading(true);
        await http.post('/login', {email, password}).then((response) => {
            console.log('response login', response);
            setIsConnect(true);
            localStorage.setItem('access_token', response?.data?.data.access_token);
            navigate('/dashboard');
        }).catch((error) => {
            console.error('error', error);
            setIsConnect(false);
            setError(error.response.data.message);
        });
        setLoading(false);
    }*/

   /* const logout = async () => {
        http.post("/logout").then((response) => {
            console.log('response logout', response);
            localStorage.removeItem("access_token");
            setUser(null);
        }).catch((error) => {
            console.error(error);
        });
        navigate("/login");
    }*/
    const memoValue = useMemo(
        () => ({
            isConnect,
            error,
        }),
        [error, isConnect]
    );

    return (
        <AuthContext.Provider value={memoValue}>
            {children}
        </AuthContext.Provider>
    );
}


export default AuthContext;