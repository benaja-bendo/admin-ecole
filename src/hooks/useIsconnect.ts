import {useEffect, useState} from "react";
import {useLocation, useMatches, useNavigate} from "react-router-dom";
import http from "../services/http";
import {UserModel} from "../models/UserModel";
import {useDispatch} from "react-redux";
import {storeUser} from "../features/user/userSlice";

const useIsconnect = () => {
    const [isConnect, setIsConnect] = useState(null as boolean | null);
    const matches = useMatches();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    if (matches.length === 1 && matches[0].pathname == '/' && isConnect) {//&& isConnect
        navigate('/dashboard');
    }
    useEffect(() => {
        const getIsConnect = async () => {
            try {
                const res = await http.get('/me');
                const user: UserModel = res.data.data.user as UserModel;
                dispatch(storeUser(user));
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