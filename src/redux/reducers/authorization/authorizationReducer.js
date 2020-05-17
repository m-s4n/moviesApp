import {
  LOGIN_ERROR,
  LOGOUT,
  LOGIN_SUCCESS,
} from "../../actions/login/actionTypes";
import initialState from "./initialState";

export function authorizationReducer(state = initialState.authorizotion, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return {
        user: {
          name: action.payload,
        },
        isAuthenticated: true,
        error: {},
      };
    case LOGIN_ERROR:
      return {
        user: {},
        isAuthenticated: false,
        error: {
          status: true,
          message: action.payload,
        },
      };
    case LOGOUT:
        return {
            user:{},
            isAuthenticated:false,
            error:{}
        }
    default:
      return state;
  }
}
