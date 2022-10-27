import React from "react";
import {useState} from "react";
import {
    Box,
    Button,
    IconButton, List,
    ListItem,
    ListItemButton,
    Menu,
    MenuItem,
    Modal,
    ModalClose,
    ModalDialog, Sheet,
    Typography
} from "@mui/joy";
import {Check, Delete, Info} from "@mui/icons-material";
import MyModal from "./MyModal";
import ModalComfirmation from "./ModalComfirmation";

export default function ItemListDemande({title}: { title: string }) {
    const [open, setOpen] = useState<boolean>(false);
    const [openDelete, setOpenDelete] = useState<boolean>(false);
    const [openAccept, setOpenAccept] = useState<boolean>(false);
    const handleClickText = () => {
        console.log("click");
    }
    const handleDelete = () => {
        console.log("delete");
        setOpenDelete(false);
    }
    const handleAccept = () => {
        console.log("accept");
        setOpenAccept(false);
        setOpen(false);
    }
    const handleInfo = () => {
        setOpen(true)
    }
    return (
        <ListItem
            endAction={
                <div className="flex gap-1">
                    <IconButton aria-label="Delete" size="sm" color="danger" onClick={() => setOpenDelete(true)}>
                        <Delete/>
                    </IconButton>
                    <IconButton aria-label={`Accepter`} size="sm" color="success" onClick={() => setOpenAccept(true)}>
                        <Check/>
                    </IconButton>
                    <IconButton aria-label={`info`} size="sm" color="info" onClick={handleInfo}>
                        <Info/>
                    </IconButton>
                </div>
            }>
            <ListItemButton onClick={handleClickText}>{title}</ListItemButton>
            <ModalComfirmation open={openDelete} handleClose={setOpenDelete} handleConfirm={handleDelete}/>
            <ModalComfirmation open={openAccept} handleClose={setOpenAccept} handleConfirm={handleAccept}/>
            <MyModal open={open} onClose={setOpen} title="Plus informations">
                <Sheet>
                    <Sheet sx={{
                            display: 'flex',
                            gap: 2,
                            mb: 2,
                        }}>
                        <img
                            src={"https://via.placeholder.com/150"}
                            alt="user image profile" className="w-full h-full"/>
                        <Sheet sx={{
                            width: '100%',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 2,
                        }}>
                            <Typography textColor="text.tertiary" fontWeight="bold">
                                Make sure to us
                            </Typography>
                            <Sheet sx={{display: 'flex', gap: 1}}>
                                <Typography level="body1" textColor="text.tertiary">
                                    Email
                                </Typography>
                                <Typography className="w-full" level="body1" textColor="green">
                                    Make sure to us
                                </Typography>
                            </Sheet>
                            <Sheet sx={{display: 'flex', gap: 1}}>
                                <Typography level="body1" textColor="text.tertiary">
                                    Phone
                                </Typography>
                                <Typography className="w-full" level="body1" textColor="green">
                                    +212 6 00 00 00 00
                                </Typography>
                            </Sheet>
                        </Sheet>
                    </Sheet>
                    <Box sx={{display: 'flex', gap: 1, justifyContent: 'flex-end'}}>
                        <Button variant="plain" color="neutral" onClick={() => setOpen(false)}>
                            revenir
                        </Button>
                        <Button variant="solid" color="success" onClick={handleAccept}>
                            accepter
                        </Button>
                    </Box>
                </Sheet>
            </MyModal>
        </ListItem>
    );
}

export const ListDemande = ({listDemande}: { listDemande: [{ title: string }] | [] }) => {
    return (<List>
        {listDemande.map((item, index) => (
            <ItemListDemande key={index} title={item.title}/>
        ))}
    </List>);
}


