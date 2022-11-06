import React, {useEffect} from "react";
import {useState} from "react";
import {
    Box,
    Button, CircularProgress,
    IconButton, List,
    ListItem,
    ListItemButton,
    Sheet,
    Typography
} from "@mui/joy";
import {Check, Delete, Info} from "@mui/icons-material";
import MyModal from "./MyModal";
import ModalComfirmation from "./ModalComfirmation";
import {DemandeModel} from "../models/DemandeModel";
import {UserModel} from "../models/UserModel";
import http from "../services/http";
import {useSelector} from "react-redux";
import {EcoleModel} from "../models/EcoleModel";

export default function ItemListDemande({demande}: { demande: DemandeModel }) {
    const ecole = useSelector((state: any) => state.ecole as EcoleModel);
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
        http.put('/ecoles/user/accept', {ecole_id: ecole.id, user_id: demande.user_id})
            .then((response) => {
                console.log(response.data);
                setOpenAccept(false);
                setOpen(false);
            })
            .catch((error) => {
                console.log(error);

            })
    }
    const handleInfo = () => {
        setOpen(true)
    }
    return (<>
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
            <ListItemButton onClick={handleClickText}>{demande.user_name}</ListItemButton>
        </ListItem>
        <ModalComfirmation open={openDelete} handleClose={setOpenDelete} handleConfirm={handleDelete}/>
        <ModalComfirmation open={openAccept} handleClose={setOpenAccept} handleConfirm={handleAccept}/>
        <MyModal open={open} onClose={setOpen} title="Plus informations">
            <DetailDemande user_id={demande.user_id} setOpen={setOpen} handleAccept={handleAccept}/>
        </MyModal>
    </>);
}

export const ListDemande = ({listDemande}: { listDemande: DemandeModel[] }) => {
    return (<List>
        {listDemande.map((item, index) => (
            <ItemListDemande key={index} demande={item}/>
        ))}
    </List>);
}

const DetailDemande = ({
                           user_id,
                           setOpen,
                           handleAccept
                       }: { user_id: number, setOpen: (b: boolean) => void, handleAccept: () => void }) => {
    const [user, setUser] = useState<UserModel>({} as UserModel);
    const [loading, setLoading] = useState<boolean>(false);
    const getUser = async () => {
        setLoading(true);
        const response = await http.get(`/users/${user_id}`);
        setUser(response.data.data as UserModel);
        setLoading(false);
    }
    useEffect(() => {
        getUser();
        return () => {
            setUser({} as UserModel);
        }
    }, []);
    if (loading) {
        return (<div className="flex justify-center items-center">
            <CircularProgress/>
        </div>);
    }

    return (<>
        <Sheet>
            <Sheet sx={{
                display: 'flex',
                gap: 2,
                mb: 2,
            }}>
                <img
                    src={user.image_path}
                    alt={user.name}
                    width="100"
                    height="100"
                    className="h-20 w-20"/>
                <Sheet sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 2,
                }}>
                    <Typography textColor="text.tertiary" fontWeight="bold">
                        {user.name}
                    </Typography>
                    <Typography level="body1" textColor="text.tertiary">
                        {user.email}
                    </Typography>
                    <Typography className="w-full" level="body1" textColor="green">
                        {user.genre === 'M' ? 'Homme' : 'Femme'}
                    </Typography>

                    <Sheet sx={{display: 'flex', gap: 1}}>
                        <Typography level="body1" textColor="text.tertiary">
                            Phone
                        </Typography>
                        <Typography className="w-full" level="body1" textColor="green">
                            {user.phone}
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
    </>);
}


