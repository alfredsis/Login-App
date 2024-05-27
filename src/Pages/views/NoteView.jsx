import { Button, Grid, IconButton, List, TextareaAutosize, TextField, Typography } from "@mui/material"
import {AddCircle,Delete, Save}from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { AddedTask } from "../components/AddedTask";
import { startDeleting, startSaveNote } from "../thunks";
import { addNewTask, setActiveNote } from "../noteSlice";
import { v4 as uuidv4 } from 'uuid';
import 'animate.css';



export const NoteView = () => {

    const dispatch = useDispatch();
    const {active, isSaving} = useSelector( state => state.noteStore);
    const [inputTarea, cambiarInputTarea] = useState('');    

    const onSaveNote = () =>{
        dispatch(startSaveNote());      
    }

    const onInputChange = ({target}) =>{           
        const newText = {...active};
        newText.mensaje = target.value; 
               
        dispatch( setActiveNote(newText));       
     }

    const onSubmit = (event)=>{
        event.preventDefault();
        
        if(inputTarea.trim() != ''){
          dispatch(addNewTask(        
                {
                    id: uuidv4(),
                    name:inputTarea,
                    completed:false
                }            
        ))};      
       
        cambiarInputTarea('');        
    };


    const handleInput =(e) => {
        cambiarInputTarea(e.target.value);
    };


    const onDelete =()=>{
        dispatch( startDeleting() );

    };

    return (


<Grid container alignItems='center'  sx={{ backgroundColor: 'secondary.light',minHeight:`92vh` }} >
    <Grid container direction='column' alignItems='center' justifyContent='center'  >

            
        <Grid container justifyContent='center' sx={{ backgroundColor: 'primary.dark1', padding:2, borderRadius: '15px 15px 0px 0px'}} xs={10} sm={8} >
            <Grid item >
                <Typography color='white' fontSize={24} fontWeight='medium'> {active.title} </Typography>
                
            </Grid>

        </Grid>


        <Grid container alignItems='center'  sx={{ backgroundColor: 'primary.light', padding:1}} xs={10} sm={8} component='form' onSubmit={onSubmit} >
    
            <Grid item  sx={{ backgroundColor: 'white'}} xs={10}  >
                <TextField 
                    type='text'
                    variant="outlined"
                    fullWidth                              
                    label='Tarea'
                    sx={{ border: 'none'}}
                    onSubmit={onSubmit}
                    autoComplete='off'
                    value={inputTarea}
                    onChange={(e)=>handleInput(e)}
                />        
            </Grid>
            <Grid item xs={2} sx={{ textAlign:'center'}} >
                
                <IconButton aria-label="add-button" sx={{color: 'primary.dark1'}} size='large' type='submit'  >
                <AddCircle sx={{ fontSize:35}} />
                </IconButton>                
            </Grid>   
     
        </Grid>
            
        <Grid className="box-shadow" container   sx={{ mb:0, backgroundColor: 'primary.light', borderRadius:'0 0 20px 20px'}} xs={10} sm={8}>
           
           <List sx={{ width: '100%', }}>


           {active.tarea.map( active =>(  
               <AddedTask key={active.id} active={active} />
           ))}
            </List>
        </Grid>
                {/* ---- Nota ---- */}
        <Grid container justifyContent='center' sx={{ backgroundColor: 'primary.dark1', padding:1, mt:3, borderRadius: '15px 15px 0px 0px'}} xs={10} sm={8}>
            <Grid item >
                <Typography color='white' fontSize={20} fontWeight='medium'>Nota</Typography>
          
            </Grid>           
        </Grid>

        <Grid className="box-shadow" container alignItems='center'  sx={{ backgroundColor: 'primary.light', padding:2}} xs={10} sm={8}>
        <Grid item  sx={{ backgroundColor: 'white'}} xs={12}  >

        <TextareaAutosize
            aria-label="empty textarea"
            placeholder="Escribe tus notas aquí"
            minRows={3}
            name='mensaje'
            value={active.mensaje}
            onChange={onInputChange}
            style={{ 
                width: '100%', 
                border:'none', 
                maxHeight:'10vh', 
                minHeight:'5vh',
                resize: 'none',  
                fontSize:'16px'               
            }}
        />      
            </Grid>
        </Grid>

        <Grid container justifyContent='center' gap={3} sx={{ mt:3}} xs={11} sm={8}>
            <Button size="large" variant="contained" startIcon={<Save />} onClick={onSaveNote} disabled={isSaving}>
            Guardar
            </Button>

            <Button variant="contained" size="large" onClick={onDelete} color="error" startIcon={<Delete />}>
                Borrar
            </Button>
        </Grid>      

           
    </Grid>
</Grid>


  )
}
