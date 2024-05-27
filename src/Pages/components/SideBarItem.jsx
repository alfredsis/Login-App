import { EventNote } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setActiveNote } from '../noteSlice'

export const SideBarItem = ({notes}) => {

    const dispatch = useDispatch();
    const onClickNote = () =>{
        dispatch(setActiveNote(notes));
        
    }

  return (
    <ListItem  disablePadding>
        <ListItemButton onClick={onClickNote} >
        <ListItemIcon>
            <EventNote />
        </ListItemIcon>
        <Grid container>
            <ListItemText primary={notes.title} />
            <ListItemText secondary={ notes.mensaje }/>
        </Grid>
        </ListItemButton>

    </ListItem>
  )
}
