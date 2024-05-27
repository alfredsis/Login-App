import { AddOutlined } from '@mui/icons-material'
import { IconButton} from '@mui/material'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { NotesLayout } from './NotesLayout'
import { startNewNote } from './thunks'
import { NoteView } from './views/NoteView'
import { NothingSelectedView } from './views/NothingSelectedView'

export const NotesPages = () => {

  const { isSaving, active  } = useSelector( state => state.noteStore);

  const dispatch = useDispatch();
  

  const onClickNewNote = () => {   

    ( async() =>{
  const {value:newTitulo} =  await Swal.fire({
        title: 'Nombre del tablero de tareas',
        input: 'text',
        showCancelButton: true,
        confirmButtonText: 'Crear',
        cancelButtonText:'Cancelar',
        inputValue: '',
        confirmButtonColor: '#2196f3',
        cancelButtonColor:'#51687e',
        inputValidator: (value) => {
          if (!value) {
            return 'El titulo no puede quedar vacio'
          }
        }
      });

        if(newTitulo !== undefined){ 
          dispatch( startNewNote(newTitulo) );
        }        
                           
     }) ()      
  }

  return (
    <NotesLayout>
      
      
       
       {
       (!!active)
       ?<NoteView className="animate__animated animate__fadeInDown animate__faster"/>
       :<NothingSelectedView />
       }

       <IconButton
        onClick={ onClickNewNote}
        size='large'
        disabled={isSaving} 
        sx={{ 
          color: 'white',
          backgroundColor:'primary.main',
          transition: 'all .2s ease-in-out',
          ':hover': { backgroundColor:'primary.dark1', opacity:0.9, transform: 'scale(1.1)'},
          position: 'fixed', right: 50, bottom: 50

        }}
       >

       <AddOutlined sx={{ fontSize: 30}} />
       </IconButton>

    </NotesLayout>
  )
}
