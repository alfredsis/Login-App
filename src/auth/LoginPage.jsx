import { useMemo } from 'react';
import VpnKeyIcon from '@mui/icons-material/VpnKey';
import { Button, TextField, Typography, Grid, Alert } from '@mui/material';
import { Google} from '@mui/icons-material';
import { Link  } from 'react-router-dom';
import { useForm } from './useForm';
import { useDispatch, useSelector } from "react-redux";
import { startGoogleSignIn, startLoginWithEmailPassword } from './thunks';

const formData = {
  email:'',
  password:''
}

export const LoginPage = () => {

  const dispatch = useDispatch();
  const { status, errorMessage } = useSelector( state => state.auth);

  const { email, password, onInputChange} = useForm( formData);

  const isAuthenticating = useMemo( ()=> status ==='verificando', [status]);

  const onSubmit = ( event ) => {
    event.preventDefault();
    
    dispatch( startLoginWithEmailPassword( {email, password}) );
    
  }

  const onGoogleSigIn = () => {
    dispatch( startGoogleSignIn () );

  }


  return (
    <>
<Grid  container
        
        // direction="column"
           justifyContent='center' 
           alignItems='center'
        sx={ {minHeight: '100vh', backgroundColor: 'primary.light'}}>


    <Grid item 
    className='box-shadow' 
    sx={ {
          backgroundColor:'primary.light1',  
          borderRadius:3, 
          borderStyle: 'solid', 
          borderColor: 'primary.lightBorder',
          padding:2}}  
     xs={8} sm={4} md={3} lg={2}>

        <Grid container sx={ {padding:2}}justifyContent='center' >

      
      <Grid container  direction="column" alignItems='center' className='animate__animated animate__fadeIn animate__fast'>
        <VpnKeyIcon sx={ {  color:'primary.dark' }} fontSize='large'/>
        <Typography variant='h5' sx={ {m:1, fontWeight: 500, color:'primary.dark' }} >Login</Typography>
      </Grid>
      
      

      <form onSubmit={ onSubmit }>
        <Grid item xs={12}>
          <TextField 
          label='Correo' 
          type='email' 
          placeholder='email' 
          name='email' fullWidth sx={ {mt:1, backgroundColor:'primary.inputFont' }} value={ email } onChange={ onInputChange }/>

        </Grid>
        <Grid>
          <TextField label='Contraseña' type='password' placeholder='Contraseña' name='password' fullWidth sx={ {mt:1,  backgroundColor:'primary.inputFont'}} value={ password } onChange={ onInputChange }/>

        </Grid>

        <Grid container>
              <Grid
                item
                xs={12}
                display={ !!errorMessage ? '':'none'}
              >
                <Alert severity='error'>{ errorMessage }</Alert>
              </Grid>
            </Grid> 

        <Grid container sx={ {mb:2, mt:1}} spacing={1}>
        <Grid item xs={12} sm={6}>
          <Button variant="contained" sx={ {backgroundColor: 'primary.main', padding:1}} fullWidth type="submit" disabled={ isAuthenticating}>
            Login
          </Button>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Button variant="contained"  fullWidth sx={ {backgroundColor: 'primary.dark1', padding:1}} onClick={ onGoogleSigIn } disabled={ isAuthenticating}>
            <Google/>
              <Typography sx={ {ml:1, borderColor:'primary.lightBorder'}}>Google</Typography>
          </Button>
        </Grid>
        </Grid>

        <Grid container direction='row' justifyContent='end'>
          <Link component={ Link} color='inherit' to="/register"> Crear una cuenta</Link>
        </Grid>

      </form>
    
    
    
    
    </Grid>

    </Grid>
  
</Grid>



</>
  );
};
