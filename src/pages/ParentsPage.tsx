import React, {useEffect, useState} from "react";
import {UserModel} from "../models/UserModel";
import http from "../services/http";
import HeaderTypo from "../components/HeaderTypo";
import {Button, IconButton} from "@mui/joy";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";


export default function ParentsPage() {
    const [users, setUsers] = useState<UserModel[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [openSearch, setOpenSearch] = useState<boolean>(false);

    const getUsers = async () => {
        setLoading(true);
        try {
            const response = await http.get("/users?role=parent");
            setUsers(response.data.data as UserModel[]);
        } catch (e: any) {
            setError(e?.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getUsers();
        return () => {
            setUsers([]);
        }
    }, []);

    return (<>
        <HeaderTypo title="Gestion des parents d'élèves">
            <div className="flex gap-1">
                <IconButton onClick={() => setOpenSearch(!openSearch)} color={openSearch ? "danger" : "primary"}>
                    {openSearch ? <CloseIcon/> : <SearchIcon/>}
                </IconButton>
            </div>
        </HeaderTypo>
        <ListUsers users={users} loading={loading}/>
    </>);
}

const ListUsers = ({
                       users,
                       loading,
                       erros
                   }: { users: UserModel[], loading: boolean, erros?: any }) => {
    return (<>
        <div className="flex flex-wrap gap-4">
            {loading ? <div>loading...</div> : users.map((user, index) => <UserCard key={index}
                                                                                    user={user}/>)}
        </div>
    </>);
}

const UserCard = ({user}: { user: UserModel }) => {
    return (<>
        <div className="flex flex-col gap-2 bg-white rounded-md p-4 shadow-md">
            <div className="flex gap-2">
                <div className="flex-none w-16 h-16 rounded-full bg-gray-200"/>
                <div className="flex flex-col gap-1">
                    <div className="text-lg font-bold">{user.name}</div>
                    <div className="text-sm text-gray-500">{user.email}</div>
                </div>
            </div>
            <div className="flex gap-2">
                <Button color="primary">Voir</Button>
                <Button color="danger">Banir</Button>
            </div>
        </div>
    </>);
}