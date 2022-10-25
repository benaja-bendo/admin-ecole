import React from 'react'
import {TaskIcon} from "../icons/TaskIcon";
import {Button, IconButton, List, ListItem, ListItemButton, Typography} from "@mui/joy";
import completing from "../assets/completing.png";
import {Check, Delete, Info} from "@mui/icons-material";
import {CheckCircleIcon} from "../icons/CheckCircleIcon";
import ItemListDemande, {ListDemande} from "./ItemListDemande";
import {ListMessage} from "./ItemListMessage";
import CardTaskComponent from "./CardTaskComponent";

export default function SynthSeComponent() {
    return (<div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-4">
            <CardTaskComponent icon="" titre="Status" more={false} link="">
                <div className="h-full flex flex-col justify-center items-center">
                    <img src={completing} alt="completing" height="100" width="100"/>
                    <Typography level="body1" variant="plain" textColor="GrayText">Votre compte est activé</Typography>
                </div>
            </CardTaskComponent>
            <CardTaskComponent icon={<CheckCircleIcon className="h-full w-full"/>} titre="Demandes"
                               more={false} link="">
                <ListDemande listDemande={[{title:'hello'}]} />
            </CardTaskComponent>
            <CardTaskComponent icon={<TaskIcon/>} titre="Messages reçus" more={true} link="/messages">
               <ListMessage listMessage={[1,2,3]} />
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


