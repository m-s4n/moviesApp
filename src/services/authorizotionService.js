import axios from 'axios';
import {setAuthorizotionToken} from '../helpers/setAuthorizotionToken';

const login = (username, password) => {

    return axios.post('http://localhost:3000/user/login',{username,password})
        .then(response => {
            // kullanıcı onaylanırsa
            if(response.data.status){
                const {token} = response.data;
                localStorage.setItem('token',token);
                setAuthorizotionToken(token);
            }
            return response.data;
        })
        .catch(response => response.data);
}

const logout = () => {
    localStorage.removeItem('token');
    setAuthorizotionToken(false);
}

export default {login, logout};