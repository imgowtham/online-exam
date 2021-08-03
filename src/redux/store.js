import {createStore, applyMiddleware} from 'redux';

import {persistStore } from 'redux-persist';

import logger from 'redux-logger';

import rootReducer from './root-reducers';

const middlewares = [logger];

const store = createStore(rootReducer, applyMiddleware(...middlewares));

const persistor = persistStore(store);

const reduxStore = {store, persistor}

export default reduxStore;