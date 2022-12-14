import {Link, NavLink} from "react-router-dom";
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
import {StoriesIcon} from "../../icons/StoriesIcon";
import {ExerciceIcon} from "../../icons/ExerciceIcon";
import {BellIcon} from "../../icons/BellIcon";

const section_general = [
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
        name: "Notifications",
        icon: <BellIcon/>,
        path: "/notifications",
    },
    // {
    //     isTitle: false,
    //     name: "Gestion des classes",
    //     icon: <ClassRoomIcon/>,
    //     path: "/classroom",
    // },
    {
        isTitle: false,
        name: "Messages",
        icon: <MessageTextIcon/>,
        path: "/messages",
    },
];
const section_contenus = [
    {
        name: "Gestion des contenus",
        isTitle: true,
    },
    {
        isTitle: false,
        name: "Gestion des Cours",
        icon: <StoriesIcon/>,
        path: "/cours",
    },
    // {
    //     isTitle: false,
    //     name: "Gestion des exercices",
    //     icon: <ExerciceIcon/>,
    //     path: "/exercices",
    // },
];
const section_users = [
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
        path: "/professor",
    },
    {
        isTitle: false,
        name: "Parents d'??l??ves",
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
const section_page = [
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
const section_preference = [
    {
        name: "param??tres",
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
            <ListItems items={section_general}/>
            <ListItems items={section_contenus}/>
            <ListItems items={section_users}/>
            <ListItems items={section_page}/>
            <ListItems items={section_preference}/>
        </div>
    </>);
}

const ListItems = ({items}: { items: any }) => {
    return (
        <ul className="flex flex-col pb-4 space-y-1">
            {items.map((item: any, index: number) => {
                if (item.isTitle) {
                    return (
                        <li className="px-5 bg-gray-100 "
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
        <NavLink to={item.path}
                 className={({isActive}) => isActive ?
                     "relative flex flex-row items-center h-11 focus:outline-none bg-blue-800 text-gray-50 border-l-4 border-transparent border-blue-500 pr-6 transition duration-75"
                     :
                     "relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 text-white-600 hover:text-gray-50 border-l-4 border-transparent hover:border-blue-500 pr-6 transition duration-75"}>
                     <span className="inline-flex justify-center items-center ml-4">
                             {item.icon}
                                 </span>
            <span className="ml-2 text-sm tracking-wide truncate">{item.name}</span>
        </NavLink>
    </li>);
}