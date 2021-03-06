import {createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from '../reducers/rootReducer';
import reduxLogger from 'redux-logger';
import reduxPromiseMiddeware from 'redux-promise-middleware';

const allEnhancers = compose(
    applyMiddleware(thunk, reduxLogger,reduxPromiseMiddeware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export const store = createStore(rootReducer,allEnhancers);