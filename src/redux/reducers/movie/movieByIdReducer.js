import {
  FETCH_MOVIE_BY_ID_FULFILLED,
  FETCH_MOVIE_BY_ID_REJECTED,
} from "../../actions/movie/actionTypes";
import initialState from './initialState';

export function movieByIdReducer(state = initialState.byIdMovie, action){
    switch (action.type) {
        case FETCH_MOVIE_BY_ID_FULFILLED:
            return {
                isFilled:true,
                data:action.payload[0],
                isRejected:false
            }
        case FETCH_MOVIE_BY_ID_REJECTED:
            return {
                isFilled:false,
                data:{},
                isRejected:{
                    status:true,
                    message:'an occurred while fetcing data'
                }
            }
        default:
            return state;
    }
}
