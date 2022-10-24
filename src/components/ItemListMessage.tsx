import React from "react";
import {IconButton, List, ListItem, ListItemButton, Sheet, Typography} from "@mui/joy";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import ReplyIcon from '@mui/icons-material/Reply';
import ItemListDemande from "./ItemListDemande";

export default function ItemListMessage() {
    const handleReply = () => {
        console.log("reply");
    }
    const handleSeen = () => {
        console.log("seen");
    }
    return (<><ListItem
        endAction={
            <div className="flex gap-1">
                <IconButton aria-label="reply" size="sm" color="success">
                    <ReplyIcon/>
                </IconButton>
                <IconButton aria-label={`Accepter`} size="sm" color="info">
                    <DoneAllIcon/>
                </IconButton>
            </div>
        }>
        <Sheet>
            <Typography textColor="text.tertiary" fontWeight="bold">
                Make sure to us
            </Typography>
        </Sheet>
    </ListItem></>);
}

export const ListMessage = ({listMessage}: { listMessage: [] }) => {
    return (
        <List>
            {listMessage.map((item, index) => (
                <ItemListMessage key={index}/>
            ))}
        </List>
    );
}