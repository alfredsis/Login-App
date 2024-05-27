import { createSlice } from '@reduxjs/toolkit';
 
export const noteSlice = createSlice({
   name: 'note',
    initialState: {
    isSaving: false,
    messageSaved: '',
    notes:[],
    active: null,
    // active: {
    //    id:'abc123',
    //    title:'',
    //    mensaje:'',
    //    date: 12345,
    //    tarea:[],
    //   }
 },
reducers: {
    savingNewNote: ( state )=>{
      state.isSaving= true;
    },

    addNewEmptyNote: (state, action) =>{
      state.notes.unshift( action.payload);
      state.isSaving = false;
    },
    addNewTask:(state, action) =>{
      state.active.tarea.unshift(action.payload);
      
    },
    setActiveNote:( state, action)=>{
      state.active = action.payload;
    },
    setCheckBox:(state, action) =>{
     state.active.tarea.map( (task) =>{
      if (task.id === action.payload.id){
        task.completed = action.payload.completed;
      }
     })
    },
    setNotes: (state, action) =>{
      state.notes = action.payload;
    },
    setSaving: ( state) =>{
      state.isSaving = true;
      state.messageSaved = '';
    },
    updateNote: (state, action) =>{
      state.isSaving= false;
      state.notes = state.notes.map( note => {
        if( note.id === action.payload.id){
          return action.payload;
        }
        return note;
      });
    },
    updateTask:(state,action) =>{
      state.active.tarea.map( task =>{
        if(task.id === action.payload.id){
          task.name = action.payload.name;
        }
        return task;
      })
    },

    clearNotesLogout: (state) =>{
      state.isSaving = false;
      state.notes=[];
      state.active=null;
    },

    deleteNotebyId:( state, action) => {
      state.active =null;
      state.notes = state.notes.filter( note => note.id != action.payload);  
    },
    deleteTask:( state,action) =>{
      state.active.tarea = state.active.tarea.filter( task => task.id != action.payload);
    }
 },
});
 
 
// Action creators are generated for each case reducer function
export const { 
  addNewEmptyNote, 
  setActiveNote, 
  setNotes, 
  setSaving, 
  updateNote, 
  deleteNotebyId, 
  savingNewNote, 
  textAreaEdit, 
  addNewTask, 
  setCheckBox, 
  clearNotesLogout,
  updateTask,
  deleteTask

} = noteSlice.actions;