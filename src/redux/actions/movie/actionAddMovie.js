import {ADD_MOVIE} from './actionTypes';
import axios from 'axios';
export function actionAddMovie(movie){
    return {
        type:ADD_MOVIE,
        payload: axios.post('http://localhost:3000/movie/add',movie).then(response => response.data)
    }
}