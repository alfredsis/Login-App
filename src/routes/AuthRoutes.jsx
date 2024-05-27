import { Navigate, Route, Routes } from "react-router-dom";
import { NotesLayout } from "../Pages/NotesLayout";
import { NotesPages } from "../Pages/NotesPages";

import { Page } from "../Pages/Page";


export const AuthRoutes =() => {
  return (
    <Routes>
                <Route path="/home" element={ <NotesPages/>} />
                <Route path="/*" element={ <Navigate to="/home" />} />

    </Routes>
    
    
  );
}
