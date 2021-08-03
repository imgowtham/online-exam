import React, {useState, useContext, useEffect, createContext} from "react";
import {useHistory} from "react-router-dom";
import {connect} from 'react-redux';
import {setCurrentUser} from './redux/user/user.actions';
// Add your Firebase credentials

const authContext = createContext();

// Provider component that wraps your app and makes auth object ... ...
// available to any child component that calls useAuth().
export function ProvideAuth({children}) {
    const auth = useProvideAuth();
    return <authContext.Provider value={auth}>{children}</authContext.Provider>;
}

export const useAuth = () => {
    return useContext(authContext);
};
// Provider hook that creates auth object and handles state


function useProvideAuth() {

    let history = useHistory();
    const [user,
        setUser] = useState('');

    const signin = cb => {
        return setUser('Admin')
    };
    const signup = (email, password) => {
        return setUser('Admin')
    };
    const signout = () => {
        return setUser(false)
    };

    // useEffect(() => {     const unsubscribe = setUser('Admin')     // Cleanup
    // subscription on unmount     return () => unsubscribe(); }, []); Return the
    // user object and auth methods
    return {user, signin, signup, signout};
}

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(null, mapDispatchToProps)(useAuth)