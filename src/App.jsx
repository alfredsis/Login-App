import { Navigate, Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { CheckingAuth } from "./auth/CheckingAuth";
import { onAuthStateChanged } from "firebase/auth";
import { FirebaseAuth } from "./firebase/config";
import { useEffect } from "react";
import { login, logout } from "./auth/authSlice";
import { Page } from "./Pages/Page";
import { AuthRoutes } from "./routes/AuthRoutes";
import { NoAuthRoutes } from "./routes/NoAuthRoutes";
import { startLoadingNotes } from "./Pages/thunks";


export const App = () => {

  const {status} = useSelector( state => state.auth );
  const dispatch = useDispatch();
  useEffect( () => {
  
    onAuthStateChanged( FirebaseAuth, async( user ) => {    //funcion de firebase
      if (!user) return dispatch( logout());

      const { uid, email, displayName, photoURL } = user;

      dispatch( login( { uid, email, displayName, photoURL }))
      dispatch( startLoadingNotes());
    } )
  
  }, []);


  if ( status === 'verificando') {
    return <CheckingAuth/>
  }

  return (



    <Routes>

          {
            (status === 'logeado')
            ? <Route path="/*" element={<AuthRoutes/> } /> 
            : <Route path="/*" element={<NoAuthRoutes/>} />
         }             
                

        
        
        

    </Routes>

  )
}