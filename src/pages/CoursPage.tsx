import HeaderTypo from "../components/HeaderTypo";
import React, {useState} from "react";
import {Button, IconButton} from "@mui/joy";
import ModalFullPage from "../components/ModalComponents/ModalFullPage";
import NewCours from "../components/CoursComponents/NewCours";
import SearchCours from "../components/CoursComponents/SearchCours";
import ListCours from "../components/CoursComponents/ListCours";
import Add from '@mui/icons-material/Add';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';


export default function CoursPage() {
    const [openSearch, setOpenSearch] = useState<boolean>(false);
    const [openNewCourse, setOpenNewCourse] = useState<boolean>(false);
    return (<>
        <HeaderTypo title="Gestion de cours">
            <div className="flex gap-1">
                <IconButton onClick={() => setOpenSearch(!openSearch)} color={openSearch ? "danger" : "primary"}>
                    {openSearch ? <CloseIcon/> : <SearchIcon/>}
                </IconButton>
                <Button startDecorator={<Add/>} onClick={() => setOpenNewCourse(true)}>Nouveau cours</Button>
            </div>
        </HeaderTypo>
        {
            openSearch ?
                <SearchCours/> :
                <ListCours/>
        }
        <ModalFullPage open={openNewCourse} onClose={setOpenNewCourse}>
            <NewCours/>
        </ModalFullPage>
    </>)
}