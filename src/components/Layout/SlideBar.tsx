import * as React from "react";
import {Link} from "react-router-dom";
import {ChartBarIcon} from "../../icons/ChartBarIcon";
import {WeekIcon} from "../../icons/WeekIcon";
import {ApprenantIcon} from "../../icons/ApprenantIcon";
import {TeacherFill} from "../../icons/TeacherFill";
import {UserSettingsIcon} from "../../icons/UserSettingsIcon";
import {ParentIcon} from "../../icons/ParentIcon";
import {PublicIcon} from "../../icons/PublicIcon";
import {SettingsIcon} from "../../icons/settingsIcon";
import {WalletIcon} from "../../icons/WalletIcon";
import {ClassRoomIcon} from "../../icons/ClassRoomIcon";
import {MessageTextIcon} from "../../icons/MessageTextIcon";

const items_g = [
    {
        name: "General",
        isTitle: true,
    },
    {
        isTitle: false,
        name: "Dashboard",
        icon: <ChartBarIcon/>,
        path: "/dashboard",
    },
    {
        isTitle: false,
        name: "Emploie du temps",
        icon: <WeekIcon/>,
        path: "/weekly-calendar",
    },
    {
        isTitle: false,
        name: "Gestion des classes",
        icon: <ClassRoomIcon/>,
        path: "/classroom",
    },
    {
        isTitle: false,
        name: "Messages",
        icon: <MessageTextIcon/>,
        path: "/messages",
    },
];
const items_u = [
    {
        isTitle: true,
        name: "Gestion des utilisateurs",
    },
    {
        isTitle: false,
        name: "Apprenants",
        icon: <ApprenantIcon/>,
        path: "/apprenants",
    },
    {
        isTitle: false,
        name: "Professors",
        icon: <TeacherFill/>,
        path: "/ProfessorPage",
    },
    {
        isTitle: false,
        name: "Parents d'élèves",
        icon: <ParentIcon/>,
        path: "/parents",
    },
    {
        isTitle: false,
        name: "Administrateurs",
        icon: <UserSettingsIcon/>,
        path: "/admin-ecole",
    },
];
const items_s = [
    {
        name: "informations public",
        isTitle: true,
    },
    {
        isTitle: false,
        name: "Page public",
        icon: <PublicIcon/>,
        path: "/public-page",
    }
];
const items_p = [
    {
        name: "paramètres",
        isTitle: true,
    },
    {
        isTitle: false,
        name: "facturation",
        icon: <WalletIcon/>,
        path: "/facture",
    },
    {
        isTitle: false,
        name: "Preferences",
        icon: <SettingsIcon/>,
        path: "/settings",
    }
];

export default function SlideBar() {
    return (<>
        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
            <ListItems items={items_g}/>
            <ListItems items={items_u}/>
            <ListItems items={items_s}/>
            <ListItems items={items_p}/>
        </div>
    </>);
}

const ListItems = ({items}: { items: any }) => {
    return (
        <ul className="flex flex-col pb-4 space-y-1">
            {items.map((item: any, index: number) => {
                if (item.isTitle) {
                    return (
                        <li className="px-5 hidden md:block bg-gray-100 "
                            key={index}>
                            <div className="flex flex-row items-center h-8">
                                <div
                                    className="text-sm font-semibold text-gray-800 uppercase">{item.name}</div>
                            </div>
                        </li>)
                }
                return (<Item key={index} item={item}/>);
            })}
        </ul>
    );
};

const Item = ({item}: any) => {
    return (<li>
        <Link to={item.path}
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-gray-50 border-l-4 border-transparent hover:border-blue-500 pr-6 transition duration-75">
            <span className="inline-flex justify-center items-center ml-4">
                            {item.icon}
                        </span>
            <span className="ml-2 text-sm tracking-wide truncate">{item.name}</span>
        </Link>
    </li>);
}