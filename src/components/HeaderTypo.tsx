import {Button, Divider, Sheet, Typography} from "@mui/joy";
import React from "react";

export default function HeaderTypo({
                                       title, subtitle, children
                                   }:
                                       { title: string, subtitle?: string, children?: React.ReactNode }) {
    return (<>
        <Sheet sx={
            {
                p: 1,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                // borderBottom: '1px solid #e0e0e0',
            }
        }>
            <Sheet>
                <Typography level="h3" fontWeight={700}>{title}</Typography>
                <Typography level="body1" pb={1}>{subtitle}</Typography>
            </Sheet>
            <Sheet>
                {children}
            </Sheet>
        </Sheet>
        <Divider sx={{mp: "8px"}}/>
    </>);
}