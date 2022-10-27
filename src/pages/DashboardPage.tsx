import React from "react";
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import {CssBaseline} from "@mui/material";
import {CssVarsProvider} from '@mui/joy/styles';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import {GraphBarIcon} from "../icons/GraphBarIcon";
import {BellIcon} from "../icons/BellIcon";
import SynthSeComponent from "../components/SynthèseComponent";
import NotificationsComponent from "../components/NotificationsComponent";
import BasicBreadcrumbs from "../components/BasicBreadcrumbs";

const ListItemTab = [
    {
        label: 'Synthèse',
        icon: <GraphBarIcon/>,
    },
    {
        label: 'Notifications',
        icon: <BellIcon/>,
    }
] as const;
const ListTapPanel = [
    {
        value: 0,
        component: <SynthSeComponent/>
    },
    {
        value: 1,
        component: <NotificationsComponent/>
    }
] as const;

export default function DashboardPage() {
    return (<>
        <BasicBreadcrumbs/>
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