import React from "react";
import {Button, Typography} from "@mui/joy";
import {Link} from "react-router-dom";

export default function CardTaskComponent({
                                              icon,
                                              titre,
                                              more = true,
                                              link = "#",
                                              children
                                          }: { icon: React.ReactNode, titre: string, more: boolean, link: string, children: React.ReactNode }) {
    return (<div className="h-80 w-full bg-white shadow-md rounded-md p-4 flex flex-col">
            <div className="flex justify-center">
                <Typography level="h4" textColor="darkseagreen" fontWeight="bold">
                    {titre}
                </Typography>
            </div>
            <div className="flex-1 overflow-y-auto">
                {children}
            </div>
            {more && <div className='flex justify-end'>
                <Link to={link} >voir tout</Link>
            </div>}

        </div>
    );
}