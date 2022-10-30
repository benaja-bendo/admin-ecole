import {ApprenantModel} from "../models/ApprenantModel";
import React, {useEffect, useState} from "react";
import http from "../services/http";
import BasicBreadcrumbs from "../components/BasicBreadcrumbs";
import {Button, IconButton} from "@mui/joy";
import CloseIcon from "@mui/icons-material/Close";
import SearchIcon from "@mui/icons-material/Search";
import Add from "@mui/icons-material/Add";
import HeaderTypo from "../components/HeaderTypo";

export default function ApprenantsPage() {
    const [apprenants, setApprenants] = useState<ApprenantModel[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [openSearch, setOpenSearch] = useState<boolean>(false);

    const getApprenants = async () => {
        setLoading(true);
        try {
            const response = await http.get("/users?role=apprenant");
            setApprenants(response.data.data as ApprenantModel[]);
        } catch (e: any) {
            setError(e?.message);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getApprenants();
        return () => {
            setApprenants([]);
        }
    }, []);

    return (<>
        <HeaderTypo title="Vu sur les apprenants">
            <div className="flex gap-1">
                <IconButton onClick={() => setOpenSearch(!openSearch)} color={openSearch ? "danger" : "primary"}>
                    {openSearch ? <CloseIcon/> : <SearchIcon/>}
                </IconButton>
            </div>
        </HeaderTypo>
        <ListApprenants apprenants={apprenants} loading={loading}/>
    </>);
}

const ListApprenants = ({
                            apprenants,
                            loading,
                            erros
                        }: { apprenants: ApprenantModel[], loading: boolean, erros?: any }) => {
    return (<>
        <div className="flex flex-wrap gap-4">
            {loading ? <div>loading...</div> : apprenants.map((apprenant, index) => <ApprenantCard key={index}
                                                                                                   apprenant={apprenant}/>)}
        </div>
    </>);
}

const ApprenantCard = ({apprenant}: { apprenant: ApprenantModel }) => {
    return (<>
        <div className="flex flex-col gap-2 bg-white rounded-md p-4 shadow-md">
            <div className="flex gap-2">
                <div className="flex-none w-16 h-16 rounded-full bg-gray-200"/>
                <div className="flex flex-col gap-1">
                    <div className="text-lg font-bold">{apprenant.name}</div>
                    <div className="text-sm text-gray-500">{apprenant.email}</div>
                </div>
            </div>
            <div className="flex gap-2">
                <Button color="primary">Voir</Button>
                <Button color="danger">Banir</Button>
            </div>
        </div>
    </>);
}