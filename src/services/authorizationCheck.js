import axios from 'axios';
import {setAuthorizotionToken} from '../helpers/setAuthorizotionToken';
export function authorizationCheck(store, action){
    let token = localStorage.getItem('token');
    if(token){
        axios.get('http://localhost:3000/test/gettest',{headers:{Authorization: `Bearer ${token}`}})
            .then(response => response.data)
            .then(data => {
                if(data.status){
                    // token onaylanır ise login edilir
                    store.dispatch(action('Mustafa Seymen'));
                    setAuthorizotionToken(token);
                }
                else{
                    // token onaylanmaz ise localstorage dan silinir
                    localStorage.removeItem('token');
                }
            })
    }
}