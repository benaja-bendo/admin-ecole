import React, {useState} from "react";
import {Modal, Typography, ModalDialog} from "@mui/joy";
import Card from "@mui/joy/Card";
import {WeekModel} from "../../models/WeekModel";

export default function CellEventCalendar({hour, week}: {
    hour: {
        hour: string;
        is_pause: boolean;
        events: {
            name: string | null;
            teacher: string | null;
            room: string | null;
            color: string | null;
        }
    }; week: WeekModel
}) {
    const [open, setOpen] = useState(false);
    console.log('hour', hour);
    return (<>
        <div
            onClick={() => setOpen(true)}
            className={`${hour.is_pause ? "bg-red-600" : ""} ${
                week?.is_weekend ? "bg-red-200" : ""
            } flex-1 border p-1 cursor-pointer`}>
            {hour?.events?.name !== undefined ? (
                <span className="block h-full w-full">
                    {hour?.events?.name}
                </span>
            ) : (
                <span> </span>
            )}
        </div>
        <Modal open={open} onClose={() => setOpen(false)}>
            <ModalDialog variant="outlined" role="alertdialog">
                <Typography level="h4" component="h2" fontWeight="md">
                    Nom du cours {hour?.events?.name}
                </Typography>
                <Typography level="h4" component="h2" fontWeight="md">
                    Nom du professeur {hour?.events?.teacher}
                </Typography>
                <Typography level="h4" component="h2" fontWeight="md">
                    Salle de la classe {hour?.events?.room}
                </Typography>
            </ModalDialog>
        </Modal>
    </>);
}