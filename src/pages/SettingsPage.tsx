import React from "react";
import {BellIcon} from "../icons/BellIcon";
import SynthSeComponent from "../components/SynthèseComponent";
import NotificationsComponent from "../components/NotificationsComponent";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab from "@mui/joy/Tab";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import TabPanel from "@mui/joy/TabPanel";
import {UserIcon} from "../icons/UserIcon";
import {ContactEmergency} from "@mui/icons-material";
import EditProfile from "../components/ProfileComponents/EditProfile";
import SupportCallComponent from "../components/SettingComponents/SupportCallComponent";
import OtherSettingComponent from "../components/SettingComponents/OtherSettingComponent";

const ListItemTab = [
    {
        label: 'Profil',
        icon: <UserIcon/>,
    },
    {
        label: 'Contact support',
        icon: <ContactEmergency/>,
    },
    {
        label: 'Autres',
        icon: '',
    }
] as const;
const ListTapPanel = [
    {
        value: 0,
        component: <EditProfile/>
    },
    {
        value: 1,
        component: <SupportCallComponent/>
    },
    {
        value: 2,
        component: <OtherSettingComponent/>
    }
] as const;

export default function SettingsPage() {
    return (<>
        <Tabs aria-label="Basic tabs" defaultValue={0}>
            <TabList>
                {ListItemTab.map((item, index) => (
                    <Tab key={index}>
                        <ListItemDecorator>
                            {item.icon}
                            <span>{item.label}</span>
                        </ListItemDecorator>
                    </Tab>
                ))}
            </TabList>
            <div className="mt-2">
                {ListTapPanel.map((item, index) => (
                    <TabPanel key={index} value={item.value}>
                        {item.component}
                    </TabPanel>
                ))}
            </div>
        </Tabs>
    </>);
}