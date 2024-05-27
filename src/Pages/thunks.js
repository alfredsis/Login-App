import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite";
import Swal from "sweetalert2";
import { logout } from "../auth/authSlice";
import { FirebaseDB } from "../firebase/config";
import { logoutFirebase } from "../firebase/providers";
import { loadNotes } from "./loadNotes";
import { addNewEmptyNote, deleteNotebyId, savingNewNote, setActiveNote, setNotes, setSaving, updateNote } from "./noteSlice";

export const startNewNote= (newTitulo) =>{
    return async( dispatch, getState ) =>{
        
        dispatch( savingNewNote());
        const {uid} = getState().auth;

        //uid
       
        const newNote= {
            title:newTitulo,
            mensaje:'',
            date: new Date().getTime(),
            tarea: [],
        }

        const newDoc = doc( collection( FirebaseDB, `${ uid }/tareas/notes` ));
        await setDoc( newDoc, newNote );
        
        newNote.id= newDoc.id;


        dispatch( addNewEmptyNote(newNote));
        dispatch( setActiveNote(newNote));
        

    }
}


export const startLoadingNotes = () => {
    return async( dispatch, getState ) => {
        const {uid} = getState().auth;
        if ( !uid ) throw new Error('El UID no existe');

       const notes = await loadNotes( uid );
        dispatch( setNotes(notes) );
    }
}

export  const startSaveNote = () =>{
    
    return async( dispatch, getState)=>{
        dispatch(setSaving())

        const {uid} =getState().auth;
        const { active:note} = getState().noteStore;

        const noteToFirestore = {...note};
        delete noteToFirestore.id;

        const docRef = doc( FirebaseDB, `${ uid }/tareas/notes/${note.id}`);
        await setDoc( docRef, noteToFirestore, { merge:true });

        dispatch( updateNote( note ));

        Swal.fire({
        icon: 'success',
        title: 'Guardado correctamente',
        showConfirmButton: false,
        timer: 1200
      });
    }
}

export const startDeleting = () =>{

    return async(dispatch, getState) =>{
        const {uid} = getState().auth;
        const {active: note} = getState().noteStore;

        const docRef = doc( FirebaseDB, `${ uid }/tareas/notes/${note.id}` );
        await deleteDoc( docRef);
        dispatch( deleteNotebyId( note.id));

    }
}


