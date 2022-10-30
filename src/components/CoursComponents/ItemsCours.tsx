import {CoursModel} from "../../models/CoursModel";
import React, {useState} from "react";
import http from "../../services/http";
import {Button, Modal, ModalClose, ModalDialog} from "@mui/joy";
import {Delete} from "@mui/icons-material";
import EditCours from "./EditCours";
import ModalComfirmation from "../ModalComfirmation";


export default function ItemsCours({content}: { content: CoursModel }){
    const [openInfo, setOpenInfo] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const [openUpdate, setOpenUpdate] = useState(false);
    const handleDelete = async () => {
        console.log("delete");
        await http.delete(`/cours/${content.id}`);
        setOpenDelete(false);
    }
    return (<>
        <tr>
            <td className="border px-4 py-2">
                <img src={content?.path_image} alt={content.name} className="w-10 h-10 rounded"/>
                <span className="font-semibold underline"> {content.name}</span>
            </td>
            <td className="border px-4 py-2">
                <p className="mb-1">
                    <span className="font-semibold underline">Description: </span>
                    {content.description}
                </p>
                <p className="mb-1">
                    <span className="font-semibold underline">cycles: </span>
                    {content.cycles.map((cycle, index) => <span key={index}>{cycle.name}, </span>)}
                </p>
                <p className="mb-1">
                    <span className="font-semibold underline">niveaux: </span>
                    {content.levels.map((level, index) => <span key={index}>{level.name}, </span>)}
                </p>
                <p className="mb-1">
                    <span className="font-semibold underline">matieres: </span>
                    {content.matieres.map((matiere, index) => <span key={index}>{matiere.name}, </span>)}
                </p>
                <p className="mb-1">
                    <span className="underline">Publier par: </span>
                    {content.authors.map((author, index) => <span key={index}
                                                                  className="text-blue-600">{author.name}</span>)}
                </p>
                <p className="mb-1">
                    <span className="font-semibold underline">Mise à jour: </span>
                    {new Date(content?.updated_at).toLocaleDateString()}
                </p>
            </td>
            <td className="border px-4 py-2 flex flex-wrap h-full w-full gap-1">
                <Button onClick={() => setOpenUpdate(true)} startDecorator={<Delete/>}
                        variant="outlined">Modifier</Button>
                <Button onClick={() => setOpenDelete(true)} startDecorator={<Delete/>} variant="outlined"
                        color="danger">Supprimer</Button>
                {/*<Button onClick={() => setOpenInfo(true)} aria-label={`info`} startDecorator={<Info/>}*/}
                {/*        variant="outlined"*/}
                {/*        color="info">info</Button>*/}
            </td>
        </tr>
        {/*<Modal*/}
        {/*    aria-labelledby="modal-title"*/}
        {/*    aria-describedby="modal-desc"*/}
        {/*    open={openInfo}*/}
        {/*    onClose={() => setOpenInfo(false)}>*/}
        {/*    <ModalDialog*/}
        {/*        aria-labelledby="layout-modal-title"*/}
        {/*        aria-describedby="layout-modal-description"*/}
        {/*        layout="fullscreen"*/}
        {/*    >*/}
        {/*        <ModalClose/>*/}
        {/*        <DetailCours content={content}/>*/}
        {/*    </ModalDialog>*/}
        {/*</Modal>*/}
        <Modal
            aria-labelledby="modal-title"
            aria-describedby="modal-desc"
            open={openUpdate}
            onClose={() => setOpenUpdate(false)}
        >
            <ModalDialog
                aria-labelledby="layout-modal-title"
                aria-describedby="layout-modal-description"
                layout="fullscreen">
                <ModalClose/>
                <EditCours content={content}/>
            </ModalDialog>
        </Modal>
        <ModalComfirmation open={openDelete} handleClose={setOpenDelete} handleConfirm={handleDelete}/>
    </>)
}