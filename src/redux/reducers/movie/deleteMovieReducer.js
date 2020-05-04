import {
  DELETE_MOVIE_FULFILLED,
  DELETE_MOVIE_REJECTED,
} from "../../actions/movie/actionTypes";
import initialState from './initialState';

export function deleteMovieReducer(state = initialState.deleteMovie, action){
    switch (action.type) {  
        case DELETE_MOVIE_FULFILLED:
            return {
                isFilled:true,
                data:action.payload,
                isRejected:{}
            }
        case DELETE_MOVIE_REJECTED :
            return {
                isFilled:false,
                data:{},
                isRejected:{
                    status:true,
                    message: 'an occurred while delete movie'
                }
            }
        default:
            return state;
    }
}
