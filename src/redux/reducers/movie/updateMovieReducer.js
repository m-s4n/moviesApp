import {
  UPDATE_MOVIE_FULFILLED,
  UPDATE_MOVIE_REJECTED,
} from "../../actions/movie/actionTypes";
import initialState from "./initialState";

export function updateMovieReducer(state = initialState.updateMovie, action) {
  switch (action.type) {
    case UPDATE_MOVIE_FULFILLED:
      return {
        isFilled: true,
        data: action.payload,
        isRejected: {},
      };
    case UPDATE_MOVIE_REJECTED:
        return {
            isFilled:false,
            data:{},
            isRejected:{
                status:true,
                message: 'An error occurred while update movie'
            }
        }
    default:
      return state;
  }
}
