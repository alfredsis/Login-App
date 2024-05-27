import { Button,  Grid, Typography } from "@mui/material"
import { startLogout } from "../auth/thunks";
import { useDispatch, useSelector } from 'react-redux';




export const Page = () => {

  const { displayName } = useSelector( state => state.auth )
  const dispatch = useDispatch();

  const onLogout = () =>{
    dispatch(startLogout() );
  }



  return (

 

    <Grid container   sx={ { backgroundColor: 'secondary.light'}} className='animate__animated animate__fadeIn animate__fast' >
        <Grid container  direction="column" alignItems='center' alignContent='center' sx={ { padding:5}}>

        
        <Grid item>
            <Typography variant='h5' >Hola <strong>{displayName}, </strong> estas logeado</Typography>

        </Grid>
        
        <Grid item padding={5}>
            <Button variant="contained" size="large" onClick={ onLogout}>
                    Cerrar la sesion
            </Button>
        </Grid>

        </Grid>
    </Grid>
  )
}
