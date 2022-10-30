import {Button} from "@mui/joy";
import HeaderTypo from "../components/HeaderTypo";
import React from "react";

export default function ExercicePage() {
    return (<>
        <HeaderTypo title={"Gestion de exercices"}>
            <Button>Nouveau cours</Button>
        </HeaderTypo>
    </>);
}