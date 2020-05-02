import {combineReducers} from 'redux';
import {movieReducer} from '../reducers/movie/movieReducer';
import {addMovieReducer} from '../reducers/movie/addMovieReducer';

export const rootReducer = combineReducers({
    movieReducer,
    addMovieReducer
});