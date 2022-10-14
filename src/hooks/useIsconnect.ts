import {useEffect, useState} from "react";
import {useLocation, useMatches, useNavigate} from "react-router-dom";
import http from "../services/http";

const useIsconnect = () => {
    const [isConnect, setIsConnect] = useState(null as boolean | null);
    const matches = useMatches();
    const navigate = useNavigate();

    if (matches.length === 1 && matches[0].pathname == '/' && isConnect) {//&& isConnect
        navigate('/dashboard');
    }
    useEffect(() => {
        const getIsConnect = async () => {
            try {
                await http.get('/me');
                setIsConnect(true);
            } catch (e) {
                setIsConnect(false);
                navigate('/login');
            }
        }
        getIsConnect();
        return () => {
            setIsConnect(null);
        }
    }, []);

    return [isConnect];
}

export default useIsconnect;