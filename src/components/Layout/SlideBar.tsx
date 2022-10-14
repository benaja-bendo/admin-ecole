import * as React from "react";
import {Link} from "react-router-dom";
import {ChartBarIcon} from "../../icons/ChartBarIcon";
import {WeekIcon} from "../../icons/WeekIcon";
import {ApprenantIcon} from "../../icons/ApprenantIcon";
import {TeacherFill} from "../../icons/teacher-fill";
import {UserSettingsIcon} from "../../icons/UserSettingsIcon";
import {ParentIcon} from "../../icons/ParentIcon";

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
    }
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
        path: "/Professor",
    },
    {
        isTitle: false,
        name: "Admin Ecole",
        icon: <UserSettingsIcon/>,
        path: "/admin-ecole",
    },
    {
        isTitle: false,
        name: "Parents d'élèves",
        icon: <ParentIcon/>,
        path: "/parents",
    },
];

export default function SlideBar() {
    return (<div className="hover:w-64 md:w-64 h-full shadow">
        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
            <ListItems items={items_g}/>
            <ListItems items={items_u}/>
        </div>
    </div>);
}

const ListItems = ({items}: { items: [] }) => {
    return (
        <ul className="flex flex-col py-4 space-y-1">
            {items.map((item: any, index) => {
                if (item.isTitle) {
                    return (<li className="px-5 hidden md:block" key={index}>
                        <div className="flex flex-row items-center h-8">
                            <div className="text-sm font-light tracking-wide text-gray-400 uppercase">{item.name}</div>
                        </div>
                    </li>)
                }
                return (<Item key={index} item={item}/>);
            })}
        </ul>
    );
};

const Item = ({item}) => {
    return (<li>
        <Link to={item.path}
              className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                        <span className="inline-flex justify-center items-center ml-4">
                            {item.icon}
                        </span>
            <span className="ml-2 text-sm tracking-wide truncate">{item.name}</span>
        </Link>
    </li>);
}