import * as React from 'react';
import {Link} from "react-router-dom";
import {styled, createTheme, ThemeProvider} from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar, {AppBarProps as MuiAppBarProps} from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import NotificationsIcon from '@mui/icons-material/Notifications';
import {UserIcon} from "../../icons/UserIcon";
import {BellIcon} from "../../icons/BellIcon";
import {Button} from "@mui/joy";
import {ApprenantIcon} from "../../icons/ApprenantIcon";
import {TeacherFill} from "../../icons/teacher-fill";
import {UserSettingsIcon} from "../../icons/UserSettingsIcon";
import {ChartBarIcon} from "../../icons/ChartBarIcon";
import {WeekIcon} from "../../icons/WeekIcon";
import {ParentIcon} from "../../icons/ParentIcon";

function Copyright(props: any) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <a color="inherit" href="https://mui.com/">
                Your Website
            </a>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const drawerWidth: number = 240;

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({theme, open}) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, {shouldForwardProp: (prop) => prop !== 'open'})(
    ({theme, open}) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
);

const mdTheme = createTheme();

function DashboardContent({children}: any) {
    const [open, setOpen] = React.useState(true);
    const toggleDrawer = () => {
        setOpen(!open);
    };

    return (
        <ThemeProvider theme={mdTheme}>
            <Box sx={{display: 'flex'}}>
                <CssBaseline/>
                <AppBar position="absolute" open={open}>
                    <Toolbar
                        sx={{
                            pr: '24px',
                        }}
                    >
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                marginRight: '36px',
                                ...(open && {display: 'none'}),
                            }}
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Typography
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                            sx={{flexGrow: 1}}
                        >
                            Dashboard
                        </Typography>
                        <IconButton color="inherit">
                            <Badge badgeContent={4} color="secondary">
                                <NotificationsIcon/>
                            </Badge>
                        </IconButton>
                    </Toolbar>
                </AppBar>
                <Drawer variant="permanent" open={open}>
                    <Toolbar
                        sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'flex-end',
                            px: [1],
                        }}
                    >
                        <IconButton onClick={toggleDrawer}>
                            <ChevronLeftIcon/>
                        </IconButton>
                    </Toolbar>
                    <Divider/>
                    <List component="nav">
                        {/*{mainListItems}*/}
                        <Divider sx={{my: 1}}/>
                        {/*{secondaryListItems}*/}
                    </List>
                </Drawer>
                <Box
                    component="main"
                    sx={{
                        backgroundColor: (theme) =>
                            theme.palette.mode === 'light'
                                ? theme.palette.grey[100]
                                : theme.palette.grey[900],
                        flexGrow: 1,
                        height: '100vh',
                        overflow: 'auto',
                    }}
                >
                    <Toolbar/>
                    <Container maxWidth="lg" sx={{mt: 4, mb: 4}}>
                        {children}
                        <Copyright sx={{pt: 4}}/>
                    </Container>
                </Box>
            </Box>
        </ThemeProvider>
    );
}

const Layout = ({children}: any) => {
    return (<div className="min-h-screen w-full flex flex-col">
        <Header/>
        <div className="h-full flex-1 flex gap-1">
            <Sidebar/>
            <div className="w-full h-full flex-1 px-6 mt-8">
                {children}
            </div>
        </div>
    </div>);
}

const Header = () => {
    return (<div className="bg-blue-300 shadow flex h-14 w-full z-10">
        <div className="min-w-min w-3/12 h-full flex items-center justify-center">
            <UserIcon/>
            <span className="text-sm">Admin</span>
        </div>
        <div className="flex-1 flex justify-between items-center">
            <div
                className="bg-white rounded flex items-center w-full max-w-xl mr-4 p-2 shadow-sm border border-gray-200">
                <button className="outline-none focus:outline-none">
                    <svg className="w-5 text-gray-600 h-5 cursor-pointer" fill="none" stroke-linecap="round"
                         stroke-linejoin="round" stroke-width="2" stroke="currentColor" viewBox="0 0 24 24">
                        <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                    </svg>
                </button>
                <input type="search" name="" id="" placeholder="recherche ..."
                       className="w-full pl-3 text-sm text-black outline-none focus:outline-none bg-transparent"/>
            </div>
            <div className="flex items-center">
                <BellIcon/>
                <Button>Déconexion</Button>
            </div>
        </div>
    </div>)
}

const Sidebar = () => {
    return (<div className="hover:w-64 md:w-64 h-full shadow">
        <div className="overflow-y-auto overflow-x-hidden flex flex-col justify-between flex-grow">
            <ul className="flex flex-col py-4 space-y-1">
                <li className="px-5 hidden md:block">
                    <div className="flex flex-row items-center h-8">
                        <div className="text-sm font-light tracking-wide text-gray-400 uppercase">General</div>
                    </div>
                </li>
                <li>
                    <Link to="/dashboard"
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                        <span className="inline-flex justify-center items-center ml-4">
                            <ChartBarIcon/>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">Tableau de Bord</span>
                    </Link>
                </li>
                <li>
                    <Link to="/weekly-calendar"
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                        <span className="inline-flex justify-center items-center ml-4">
                  <WeekIcon/>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">Emploie du temps</span>
                    </Link>
                </li>
            </ul>

            <ul className="flex flex-col py-4 space-y-1">
                <li className="px-5 hidden md:block">
                    <div className="flex flex-row items-center h-8">
                        <div className="text-sm font-light tracking-wide text-gray-400 uppercase">
                            <span className="ml-2 text-sm tracking-wide truncate">Gestion des étudiants</span>
                        </div>
                    </div>
                </li>
                <li>
                    <Link to="/apprenants"
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                        <span className="inline-flex justify-center items-center ml-4">
                            <ApprenantIcon/>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">Apprenants</span>
                    </Link>
                </li>
                <li>
                    <Link to="/Professor"
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                        <span className="inline-flex justify-center items-center ml-4">
                            <TeacherFill/>
                </span>
                        <span className="ml-2 text-sm tracking-wide truncate">Professors</span>
                    </Link>
                </li>
                <li>
                    <Link to="/admin-ecole"
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                        <span className="inline-flex justify-center items-center ml-4">
                            <UserSettingsIcon/>
                </span>
                        <span className="ml-2 text-sm tracking-wide truncate"> Autres administrateurs</span>
                    </Link>
                </li>
                <li>
                    <Link to="/parents"
                          className="relative flex flex-row items-center h-11 focus:outline-none hover:bg-blue-800 dark:hover:bg-gray-600 text-white-600 hover:text-white-800 border-l-4 border-transparent hover:border-blue-500 dark:hover:border-gray-800 pr-6">
                        <span className="inline-flex justify-center items-center ml-4">
                            <ParentIcon/>
                        </span>
                        <span className="ml-2 text-sm tracking-wide truncate">Parents d'élèves</span>
                    </Link>
                </li>
            </ul>
        </div>
    </div>)
}

export default Layout;