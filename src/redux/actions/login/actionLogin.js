import {LOGOUT, LOGIN_ERROR, LOGIN_SUCCESS} from './actionTypes';
import authorizotionService from '../../../services/authorizotionService';

export const loginSuccess = data => {
    return {
        type:LOGIN_SUCCESS,
        payload:data
    }
}

const loginError = message => {
    return {
        type:LOGIN_ERROR,
        payload:message
    }
}

export function logout(){
    authorizotionService.logout();
    return {
        type:LOGOUT,
        payload:null
    }
}

export function login(username, password){
    return dispatch => {
        authorizotionService.login(username, password)
            .then(data => {
                data.message ? dispatch(loginError(data.message)) : dispatch(loginSuccess('Mustafa Seymen'));
            })
            .catch(error => dispatch(loginError(error)));
    }
}