import React, {useEffect, useState} from 'react'
import {TaskIcon} from "../icons/TaskIcon";
import {Typography} from "@mui/joy";
import completing from "../assets/completing.png";
import {CheckCircleIcon} from "../icons/CheckCircleIcon";
import {ListDemande} from "./ItemListDemande";
import {ListMessage} from "./ItemListMessage";
import CardTaskComponent from "./CardTaskComponent";
import http from "../services/http";
import {useSelector} from "react-redux";
import {UserModel} from "../models/UserModel";
import {DemandeModel} from "../models/DemandeModel";

export default function SynthSeComponent() {
    const user = useSelector((state: any) => state.user as UserModel);
    const [demandes, setDemandes] = useState([] as DemandeModel[]);

    const getDemandes = async () => {
        const response = await http.post('/demandes', {ecole_id: user.id});
        // console.log('response', response.data);
        setDemandes(response.data.data as DemandeModel[]);
    }
    useEffect(() => {
        getDemandes();
        return () => {
            setDemandes([]);
        }
    }, [])
    return (<div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <CardTaskComponent titre="Status" more={false} link="">
                <div className="h-full flex flex-col justify-center items-center">
                    <img src={completing} alt="completing" height="100" width="100"/>
                    <Typography level="body1" variant="plain" textColor="GrayText">Votre compte est activé</Typography>
                </div>
            </CardTaskComponent>

            <CardTaskComponent titre="Demandes"
                               more={false} link="">
                <ListDemande listDemande={demandes}/>
            </CardTaskComponent>

            <CardTaskComponent titre="Messages reçus" more={true} link="/messages">
                <ListMessage listMessage={[]}/>
            </CardTaskComponent>
        </div>
        <div className="w-full bg-white shadow-md rounded-md p-4">
            <Typography level="h4" textColor="neutral.500" fontWeight="lg">
                Bienvenue sur votre tableau de bord
            </Typography>
            <div>
                <Typography textColor="neutral.500">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus adipisci alias aliquid atque
                    consequatur corporis cumque, cupiditate delectus deleniti dolor doloremque dolorum ea eius enim
                    exercitationem fugiat hic id illum inventore ipsa ipsam iure iusto laboriosam laborum magnam maiores
                    maxime minima minus molestiae mollitia nam natus nemo neque nihil nisi nobis non nostrum nulla
                    obcaecati officia officiis omnis optio pariatur perferendis perspiciatis placeat possimus
                    praesentium
                </Typography>
            </div>
        </div>
    </div>);
}


