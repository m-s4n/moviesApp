import {UPDATE_MOVIE} from './actionTypes';
import axios from 'axios';
export function actionUpdateMovie(movie, movieId){
    return {
        type:UPDATE_MOVIE,
        payload: axios.put('http://localhost:3000/movie/update/' + movieId, movie).then(response => response.data)
    }
}