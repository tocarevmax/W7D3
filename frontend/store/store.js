import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers/root_reducer.js';
import logger from 'redux-logger';
import thunk from '../middleware/thunk.js';

const configureStore = () => createStore(rootReducer, applyMiddleware(thunk, logger));

export default configureStore;
