import {combineReducers} from 'redux';
import {movieReducer} from '../reducers/movie/movieReducer';
export const rootReducer = combineReducers({
    movieReducer:movieReducer
});