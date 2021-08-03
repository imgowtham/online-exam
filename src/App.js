import React from 'react';
import './App.scss';
import MenuNavBar from './Components/Nav-Bar/nav-bar.components';
import {makeStyles, CssBaseline, Button, Grow} from '@material-ui/core';
import {Close} from '@material-ui/icons';
import {Switch, Route, Redirect} from 'react-router-dom';
import Students from './Pages/Students/students.component';
import Users from './Pages/Users/users.component';
import Exams from './Pages/Exams/exams.components';
import {SnackbarProvider} from 'notistack';
import SignIn from './Pages/Sign-In/sign-in.component';
import {useAuth} from './auth';
import {connect} from 'react-redux';

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

const App = (props) => {
    const classes = useStyles();
    const auth = useAuth();
    const [open,
        setOpen] = React.useState(false);
    const handleDrawerOpen = () => {
        setOpen(status => !status);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const notistackRef = React.createRef();

    const onClickDismiss = key => () => {
        notistackRef
            .current
            .closeSnackbar(key);

    }
    return (
        <SnackbarProvider
            maxSnack={3}
            preventDuplicate={true}
            autoHideDuration={5000}
            TransitionComponent={Grow}
            ref={notistackRef}
            classes={{
            variantSuccess: classes.success,
            variantError: classes.error
        }}
            action={(key) => (
            <Button
                style={{
                color: '#fff'
            }}
                onClick={onClickDismiss(key)}>
                <Close/>
            </Button>
        )}
            anchorOrigin={{
            vertical: 'top',
            horizontal: 'right'
        }}>
            <div className={classes.root}>
                {props.currentUser
                    ? <React.Fragment>
                            <CssBaseline/>
                            <MenuNavBar
                                handleDrawerOpen={handleDrawerOpen}
                                handleDrawerClose={handleDrawerClose}
                                drawerOpen={open}/>
                            <main className={classes.content}>
                                <div className={classes.toolbar}/>
                                <Switch>
                                    <PrivateRoute path="/Students" user={props.currentUser}>
                                        <Students/>
                                    </PrivateRoute>
                                    <PrivateRoute path="/Exams" user={props.currentUser}>
                                        <Exams/>
                                    </PrivateRoute>
                                </Switch>
                            </main>
                        </React.Fragment>
                    : <Switch>
                        <Route>
                            <SignIn/>
                        </Route>
                    </Switch>
}
            </div>
        </SnackbarProvider>
    );
}

const mapStateToProps = state => ({currentUser: state.user.currentUser})

const PrivateRoute = ({
    children,
    user,
    ...rest
}) => {
    return (
        <Route
            {...rest}
            render={({location}) => user
            ? (children)
            : (<Redirect
                to={{
                pathname: "/login",
                state: {
                    from: location
                }
            }}/>)}/>
    );
}

export default connect(mapStateToProps)(App)