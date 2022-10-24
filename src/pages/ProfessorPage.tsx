import {useState} from "react";
import {Box} from "@mui/joy";
import {
    TabContext,
    TabList,
    TabPanel
} from '@mui/lab';
import Tab from '@mui/material/Tab';


export default function ProfessorPage() {
    const [value, setValue] = useState('1');

    const handleChange = (event: any, newValue: any) => {
        setValue(newValue);
    };
    return (<div>
        <Box sx={{width: '100%', typography: 'body1'}}>
            <TabContext value={value}>
                <Box sx={{borderBottom: 1, borderColor: 'divider'}}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Liste Complete" value="1"/>
                        <Tab label="Réglages" value="2"/>
                        {/*<Tab label="Item Three" value="3"/>*/}
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <Box sx={{mt: 3}}>
                        liste des professeurs
                    </Box>
                </TabPanel>
                <TabPanel value="2">Liste des réglages</TabPanel>
                {/*<TabPanel value="3">Item Three</TabPanel>*/}
            </TabContext>
        </Box>
    </div>);
}