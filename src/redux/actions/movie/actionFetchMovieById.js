import {FETCH_MOVIE_BY_ID} from './actionTypes';
import axios from 'axios';

export function actionFetchMovieById(movieId){
    return {
        type:FETCH_MOVIE_BY_ID,
        payload: axios.get('http://localhost:3000/movie/getmovie/' + movieId).then(response => response.data)
    }
}