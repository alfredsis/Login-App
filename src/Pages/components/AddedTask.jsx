import { Edit, HighlightOff } from "@mui/icons-material"
import { Checkbox, Grid, IconButton, ListItem, ListItemButton, ListItemIcon, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import Swal from "sweetalert2";
import { deleteTask, setCheckBox, updateTask } from "../noteSlice";
import 'animate.css';



export const AddedTask = ({active}) => {

  const dispatch = useDispatch();

  const handleChange = () =>{
    const newState=!(active.completed);
    dispatch(setCheckBox({id:active.id, completed:newState, name:active.name}));
  }

 
  const onEditNote = () => {   

    ( async() =>{
  const {value:newTitulo} =  await Swal.fire({
        
        input: 'text',
        title: 'Nuevo nombre de la tarea',
        showCancelButton: true,
        confirmButtonText: 'Aceptar',
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
          
          dispatch( updateTask({id:active.id, completed:active.completed, name:newTitulo}));

        }        
                           
     }) ()      
  };

  const onDeleteTask =()=>{
    dispatch( deleteTask(active.id)); 
  };



  return (
    <ListItem
    key={active.id}  
    sx={{ padding:0 }}
>
    
  <ListItemButton className="animate__animated animate__fadeInDown animate__faster" > 

    <Grid container justifyContent='space-between' alignItems='center'>
    <Grid  >
    <ListItemIcon onClick={handleChange}>
    {/* { active.completed ? <Checkbox size="large" Checked   /> : <Checkbox size="large" />} */}
    <Checkbox size="large" checked={active.completed}  />
      

      <Typography  sx={{ fontSize:19, fontWeight:'500', color:'secondary.dark', mt:1}}>{active.name}</Typography>
    </ListItemIcon>
    
    
 </Grid>

  <Grid >

    <IconButton size="large" color="primary" sx={{  opacity: 0.08, ':hover': { opacity: 1}}} onClick={onEditNote}>
      <Edit  />                    
    </IconButton>

    <IconButton size="large" color="error" sx={{  opacity: 0.08, ':hover': { opacity: 1}}} onClick={onDeleteTask}>
      <HighlightOff/>
    </IconButton>
 </Grid>

    </Grid>
   </ListItemButton> 
</ListItem>
  )
}
