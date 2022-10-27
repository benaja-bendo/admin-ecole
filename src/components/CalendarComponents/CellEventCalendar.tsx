import React, {useState} from "react";
import {Modal, Typography} from "@mui/joy";

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
    }; week: any
}) {
    const [open, setOpen] = useState(false);
    return (<><div
                onDoubleClick={() => setOpen(true)}
                className={`${hour.is_pause ? "bg-red-600" : ""} ${
                    week?.is_weekend ? "bg-green-200" : "bg-blue-100"
                } flex-1 border p-1`}>
                {hour?.events?.name !== null ? (
                    <span className="block h-full w-full cursor-pointer bg-green-200">
            {" "}
                        {hour?.events?.name}
          </span>
                ) : (
                    <span> </span>
                )}
            </div>
            <Modal open={open} onClose={() => setOpen(false)}>
                <div className="p-4">
                    <Typography level="h4" component="h2" fontWeight="md">
                        {hour?.events?.name}
                    </Typography>
                    <Typography level="h4" component="h2" fontWeight="md">
                        {hour?.events?.teacher}
                    </Typography>
                    <Typography level="h4" component="h2" fontWeight="md">
                        {hour?.events?.room}
                    </Typography>
                </div>
            </Modal>
        </>);
}