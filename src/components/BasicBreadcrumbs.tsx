import React, {useEffect, useState} from 'react';
import {Breadcrumbs, Typography} from "@mui/joy";
import {Link, useLocation, useMatches} from "react-router-dom";

export default function BasicBreadcrumbs() {
    const [breadcrumbs, setBreadcrumbs] = useState<[]>([]);
    // const location = useLocation();
    const matches = useMatches();

    useEffect(() => {
        const pathnames = matches.map((match) => match.pathname);
        // const pathnames = location.pathname.split('/').filter((x) => x) as string[];
        setBreadcrumbs(pathnames as []);
    }, [location]);
    // useEffect(() => {
    //     const path = window.location.pathname;
    //     const pathnames = path.split('/').filter((x) => x) as string[];
    //     setBreadcrumbs(pathnames);
    // }, []);
    return (
        <Breadcrumbs separator="›" aria-label="breadcrumbs">
            {breadcrumbs.splice(-1).map((item: string) => (
                <Link
                    // The `preventDefault` is for demonstration purposes, generally, you don't need it in your application
                    onClick={(event) => event.preventDefault()}
                    key={item}
                    to={`/${item.toLowerCase()}`}
                >
                    {item}
                </Link>
            ))}
            {/*<Typography fontSize="inherit">*/}
            {/*    {breadcrumbs[breadcrumbs.length - 1]}*/}
            {/*</Typography>*/}
        </Breadcrumbs>
    );
}