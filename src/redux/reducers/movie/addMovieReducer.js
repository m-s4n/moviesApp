import * as actionTypes from '../../actions/movie/actionTypes';
import initialState from './initialState';

export function addMovieReducer(state = initialState.addMovies, action){
    switch (action.type) {
        case actionTypes.ADD_MOVIE_PENDING :
            return {
                isPending: true,
                isFilled: false,
                data: {},
                isRejected: {}
              };
        case actionTypes.ADD_MOVIE_FULFILLED :
            return {
                isPending: false,
                isFilled: true,
                data: {
                    ...action.payload
                },
                isRejected: {}
              };
        case actionTypes.ADD_MOVIE_REJECTED :
            return{
                isPending: false,
                isFilled: false,
                data:{},
                isRejected : {
                    status: true,
                    message: 'an occurred while add movie'
                }
            }
        default:
            return state;
    }
}