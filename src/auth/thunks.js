import { loginWithEmailPassword, logoutFirebase, registerUserWithEmailPassword, singInWithGoogle } from "../firebase/providers";
import { clearNotesLogout } from "../Pages/noteSlice";
import { login, logout, verificandoDatos } from "./authSlice";


export const verificandoAuth = (email, password) => {

    return async( dispatch ) => {
        dispatch( verificandoDatos() );

    } 
}

export const startGoogleSignIn = () => {                 //Aca la de google
    return async( dispatch ) => {

        dispatch(  verificandoDatos());

        const result = await singInWithGoogle();
        if( !result.ok) return dispatch( logout(result.errorMessage) );

        dispatch( login( result) );
    }

}

export const startCreatingUserWithEmailPassword=({email, password,displayName}) => {
    return async(dispatch) => {
        dispatch( verificandoDatos() );
        const { ok, uid, photoURL } = await registerUserWithEmailPassword({ email, password, displayName});

        if ( !ok ) return dispatch( logout(errorMessage))

        dispatch( login( { uid, displayName, email, photoURL }) );

    }

}

export const startLoginWithEmailPassword = ({email, password}) => {
    return async( dispatch ) => {
        dispatch( verificandoDatos());
        
        const result = await loginWithEmailPassword({email, password});
        if (!result.ok) return dispatch( logout(result) );

        dispatch( login (result) );

    }

}
export const startLogout = () => {
    return async( dispatch )=>{
        await logoutFirebase();
        dispatch( clearNotesLogout());
        dispatch( logout() );
    }
}