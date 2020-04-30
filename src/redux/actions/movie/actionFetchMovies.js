import {FETCH_MOVIES} from './actionTypes';
import axios from 'axios';

export function actionFetchMovies(){
    return {
        type:FETCH_MOVIES,
        payload: axios.get('http://localhost:3000/movie/getmovies').then(response => response.data)
    }
}