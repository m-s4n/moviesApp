import {combineReducers} from 'redux';
import {movieReducer} from '../reducers/movie/movieReducer';
import {addMovieReducer} from '../reducers/movie/addMovieReducer';
import {movieByIdReducer} from '../reducers/movie/movieByIdReducer';
import {deleteMovieReducer} from '../reducers/movie/deleteMovieReducer';
import {updateMovieReducer} from '../reducers/movie/updateMovieReducer';
import {authorizationReducer} from '../reducers/authorization/authorizationReducer';

export const rootReducer = combineReducers({
    movieReducer,
    addMovieReducer,
    movieByIdReducer,
    deleteMovieReducer,
    updateMovieReducer,
    authorizationReducer
});