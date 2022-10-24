import React from "react";
import {Button, Typography} from "@mui/joy";

export default function CardTaskComponent({
                                              icon,
                                              titre,
                                              more = true,
                                              children
                                          }: { icon: React.ReactNode, titre: string, more: boolean, children: React.ReactNode })
{
    return (<div className="h-80 w-full bg-white shadow-md rounded-md p-4 flex flex-col">
            <div className="flex">
                <Typography level="h6" textColor="green" fontWeight="lg">
                    {titre}
                </Typography>
            </div>
            <div className="flex-1 overflow-y-auto">
                {children}
            </div>
            {more && <div className='flex justify-end'>
                <Button variant="plain">voir tout</Button>
            </div>}

        </div>
    );
}