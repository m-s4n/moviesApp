import {DELETE_MOVIE} from './actionTypes';
import axios from 'axios';


export function actionDeleteMovie(movieId){
    return {
        type:DELETE_MOVIE,
        payload: axios.delete('http://localhost:3000/movie/delete/' + movieId).then(response => response.data)
    }
}