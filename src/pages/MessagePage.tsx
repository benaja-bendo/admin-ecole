import HeaderTypo from "../components/HeaderTypo";
import React from "react";
import BasicBreadcrumbs from "../components/BasicBreadcrumbs";
import {Button} from "@mui/joy";

export default function MessagePage() {
    return (<>
        <HeaderTypo title={"Messageries"}>
            <Button>Nouvelle Conversation</Button>
        </HeaderTypo>
        <div>
            card message
        </div>
    </>);
}