import initialState from "./initialState";
import * as actionTypes from "../../actions/movie/actionTypes";

export function movieReducer(state = initialState.movies, action) {
  switch (action.type) {
    case actionTypes.FETCH_MOVIES_FULFILLED:
      return {
        isFilled: true,
        data: action.payload,
        isRejected: {}
      };
    case actionTypes.FETCH_MOVIES_REJECTED:
      return {
        isFilled:false,
        data:[],
        isRejected:{
            status:true,
            message:'an occurred while fetcing data'
        }
      };
    default:
      return state;
  }
}
