import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import CallReceivedIcon from '@mui/icons-material/CallReceived';
import CallMadeIcon from '@mui/icons-material/CallMade';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import AddIcon from '@mui/icons-material/Add';

import Header from "./Header";
import FooterBar from "./FooterBar"

const drawerWidth = 200;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(
    ({ theme, open }) => ({
        flexGrow: 1,
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
        }),
        height: '100vh',
        paddingBottom: '130px',
    }),
);

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<{
    open?: boolean;
}>(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    })
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
}));

const Footer = styled('div', { shouldForwardProp: (prop) => prop !== 'open' })<{
    open?: boolean;
}>(({ theme , open}) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    display: 'flex',
    position: 'fixed',
    top: 'auto',
    bottom: 0,
    width: '100%'}))

export default function PersistentDrawerLeft(props: any) {
    const { window, theme, children, addedAsset } = props;
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const handleClick = (clicked: number) => {
        props.sectionSelected(clicked);
        setOpen(false);
    };

    return (
        <>
            <CssBaseline />
            <AppBar position="fixed" open={open}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{ mr: 2 }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Header killSession={props.killSession}
                                       connected={props.connected}
                                       address={props.address}
                                       chainId={props.chainId}/>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    width: drawerWidth,
                    flexShrink: 0,
                    '& .MuiDrawer-paper': {
                        width: drawerWidth,
                        boxSizing: 'border-box',
                    },
                }}
                anchor="left"
                open={open}
            >
                <DrawerHeader>
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    <ListItem button key={"Overview"} onClick={() => handleClick(1)}>
                        <ListItemIcon><AccountBalanceIcon /> </ListItemIcon>
                        <ListItemText primary={"Overview"} />
                    </ListItem>
                </List>
                <Divider />
                <List>
                    <ListItem button key={"Deposit"} onClick={() => handleClick(2)}>
                        <ListItemIcon><CallReceivedIcon /> </ListItemIcon>
                        <ListItemText primary={"Deposit"} />
                    </ListItem>
                    <ListItem button key={"Withdraw"} onClick={() => handleClick(3)}>
                        <ListItemIcon><CallMadeIcon /> </ListItemIcon>
                        <ListItemText primary={"Withdraw"} />
                    </ListItem>
                </List>
                { addedAsset ? '' : (
                    <>
                        <Divider />
                        <List>
                            <ListItem button key={"Add wNAV to Metamask"} onClick={() => handleClick(5)}>
                                <ListItemIcon><AddIcon /> </ListItemIcon>
                                <ListItemText primary={"Add wNAV to Metamask"} />
                            </ListItem>
                        </List>
                    </>
                )}
            </Drawer>
            <Main open={open}>
                <DrawerHeader />
                {children}
            </Main>
            <Footer>
                <FooterBar killSession={props.killSession}
                               connected={props.connected}
                               address={props.address}
                               chainId={props.chainId}
                               scAddress={props.scAddress}/>
            </Footer>

        </>

    );
}
