import initialState from './initialState';

export function movieReducer(state = initialState.movies, action){
   switch (action.type) 
   {
       case 'MERHABA':
           return state;
       default:
           return state;
   }
}