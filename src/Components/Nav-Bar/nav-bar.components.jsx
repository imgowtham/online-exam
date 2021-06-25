import React from 'react';
import clsx from 'clsx';
import {makeStyles} from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import {useHistory} from 'react-router-dom';
import ContactsIcon from '@material-ui/icons/Contacts';
import GroupIcon from '@material-ui/icons/Group';
import CastForEducationIcon from '@material-ui/icons/CastForEducation';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme
            .transitions
            .create([
                'width', 'margin'
            ], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            })
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme
            .transitions
            .create([
                'width', 'margin'
            ], {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
    },
    menuButton: {
        marginRight: 36
    },
    hide: {
        display: 'none'
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap'
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme
            .transitions
            .create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen
            })
    },
    drawerClose: {
        transition: theme
            .transitions
            .create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.leavingScreen
            }),
        overflowX: 'hidden',
        width: theme.spacing(7) + 1,
        [
            theme
                .breakpoints
                .up('sm')
        ]: {
            width: theme.spacing(9) + 1
        }
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
    },
    title: {
        flexGrow: 1
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));

const MenuNavBar = ({handleDrawerClose, handleDrawerOpen, drawerOpen}) => {
    const classes = useStyles();
    const history = useHistory();
    const [anchorEl,
        setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const route = (path) => {
        history.push({
            pathname: `/${path}`
        })
    }
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <AppBar position="fixed" className={clsx(classes.appBar)}>
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        className={clsx(classes.menuButton)}>
                        <MenuIcon/>
                    </IconButton>
                    <Typography className={classes.title} variant="h6" noWrap>
                        Online Exam
                    </Typography>
                    <div>
                        <IconButton
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit">
                            <AccountCircle/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                            keepMounted
                            transformOrigin={{
                            vertical: 'top',
                            horizontal: 'right'
                        }}
                            open={open}
                            onClose={handleClose}>
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                    </div>
                </Toolbar>
            </AppBar>
            <Drawer
                variant="permanent"
                className={clsx(classes.drawer, {
                [classes.drawerOpen]: drawerOpen,
                [classes.drawerClose]: !drawerOpen
            })}
                classes={{
                paper: clsx({
                    [classes.drawerOpen]: drawerOpen,
                    [classes.drawerClose]: !drawerOpen
                })
            }}>
                <div className={classes.toolbar} />
                <List>
                    <ListItem button key={"Users"} onClick={() => route('')}>
                            <ListItemIcon>
                                <ContactsIcon/></ListItemIcon><ListItemText primary={"Users"}/>
                    </ListItem>
                    <ListItem button key={"Students"} onClick={() => route('Students')}>
                    <ListItemIcon>
                                <GroupIcon/></ListItemIcon><ListItemText primary={"Students"}/>
                    </ListItem>
                    <ListItem button key={"Exams"} onClick={() => route('Exams')}>
                    <ListItemIcon>
                                <CastForEducationIcon/></ListItemIcon><ListItemText primary={"Exams"}/>
                    </ListItem>
                </List>
            </Drawer>
        </div>
    );
}

export default MenuNavBar