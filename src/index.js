import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import {ProvideAuth} from './auth';
import {Provider} from 'react-redux';
import reduxStore from './redux/store';
import {PersistGate} from 'redux-persist/integration/react';

ReactDOM.render(
    <Provider store={reduxStore.store}>
    <BrowserRouter>
        <PersistGate persistor={reduxStore.persistor}>
            <ProvideAuth>
                <App/></ProvideAuth>
        </PersistGate>
    </BrowserRouter>
</Provider>, document.getElementById('root'));
