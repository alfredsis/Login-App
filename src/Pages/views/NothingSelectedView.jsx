import { Grid, Typography } from "@mui/material"
import {NoteAdd }from '@mui/icons-material';


export const NothingSelectedView = () => {
  return (

    <Grid container
        spacing={ 0 }
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ minHeight:'92vh', backgroundColor: 'primary.light'}}

    >
        


        
        <Grid item xs={ 12}>
            <NoteAdd sx={{ fontSize:100, color:'primary.main'}} />
        </Grid>
        <Grid item xs={12}>
            <Typography color='primary' variant="h5">Seleciona o crea una Nota</Typography>
        </Grid>
        
        

    </Grid>


    
  )
}
