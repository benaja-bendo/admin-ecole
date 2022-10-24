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

let ListItemTab = [
    {
        label: 'Synthèse',
        icon: <GraphBarIcon/>,
    },
    {
        label: 'Notifications',
        icon: <BellIcon/>,
    }
];

export default function DashboardPage() {
    return (<CssVarsProvider>
        <CssBaseline/>
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
                <TabPanel value={0}>
                    <SynthSeComponent/>
                </TabPanel>
                <TabPanel value={1}>
                    <NotificationsComponent/>
                </TabPanel>
            </div>
        </Tabs>
    </CssVarsProvider>);
}