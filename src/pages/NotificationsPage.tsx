import NotificationsComponent from "../components/NotificationsComponent";
import React from "react";
import HeaderTypo from "../components/HeaderTypo";

export default function NotificationsPage() {
    return (<>
        <HeaderTypo title={"Notifications"} subtitle={"toutes les notifications reçus"}/>
        <NotificationsComponent/>
    </>);
}