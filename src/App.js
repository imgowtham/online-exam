import React from 'react';
import './App.css';
import MenuNavBar from './Components/Nav-Bar/nav-bar.components';
import {makeStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import {Switch, Route} from 'react-router-dom';
import Students from './Pages/Students/students.component';
import Users from './Pages/Users/users.component';
import Exams from './Pages/Exams/exams.components';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex'
    },
    toolbar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3)
    }
}));

const App = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);

    const handleDrawerOpen = () => {
        setOpen(status => !status);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };
    return (
        <div className={classes.root}>
            <CssBaseline/>
            <MenuNavBar
                handleDrawerOpen={handleDrawerOpen}
                handleDrawerClose={handleDrawerClose}
                drawerOpen={open}/>
            <main className={classes.content}>
                <div className={classes.toolbar}/>
                <Switch>
                    <Route exact path="/" component={Users}  />
                    <Route exact path="/Students" component={Students}  />
                    <Route exact path="/Exams" component={Exams}  />
                </Switch>
            </main>
        </div>
    );
}

export default App;
