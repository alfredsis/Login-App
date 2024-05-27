import { createSlice } from '@reduxjs/toolkit';
 
export const authSlice = createSlice({
   name: 'auth',
   initialState: {
   status: 'verificando',
   uid: null,
   email: null,
   displayName: null,
   photoURL: null,
   errorMessage: null,
 },
reducers: {
    login: (state, {payload}) => {
        state.status= 'logeado',
        state.uid= payload.uid;
        state.email= payload.email;
        state.displayName= payload.displayName;
        state.photoURL= payload.photoURL;
        state.errorMessage= null;
},
    logout: (state, {payload} )=> {
        state.status= 'no-logeado', //not-auth, y auth
        state.uid= null;
        state.email= null;
        state.displayName= null;
        state.photoURL= null;
        state.errorMessage= payload?.errorMessage;

 },
    verificandoDatos: ( state ) => {
    state.status ='verificando'

}
},
});
 
 
export const { login, logout, verificandoDatos } = authSlice.actions;