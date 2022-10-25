import React from "react";
import NoData from "../assets/Nodata.png";

export default function EmptyContent({children}: { children: React.ReactNode }) {
    return (<div className="h-full w-full">
        <div className="flex flex-col items-center justify-center">
            <img src={NoData} alt="empty content" height="100" width="100"/>
            {children}
        </div>
    </div>);
}