import { Button, TextField, Typography, Grid, Alert } from '@mui/material';
import {  HowToReg } from '@mui/icons-material';
import { Link  } from 'react-router-dom';
import { useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from './useForm';
import { startCreatingUserWithEmailPassword } from './thunks';


const formData= {
  email: '',
  password: '',
  displayName: ''
}
const formValidations ={
  email: [ (value) => value.includes('@'), 'El correo no es valido'],
  password: [ (value) => value.length >= 6, 'El password debe de tener mas de 6 caracteres.'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio'],
}


export const RegisterPage = () => {

  const dispatch = useDispatch();
  const [formSubmitted, setformSubmitted] = useState(false);

  const { status, errorMessage }= useSelector( state => state.auth);
  const isCheckingAuthentication = useMemo( ( ) => status ==='verificando', [status]);

  const { displayName, email, password, onInputChange, formState, emailValid, passwordValid, isFormValid, displayNameValid } = useForm( formData, formValidations );

  const onSubmit = (event )=> {

    event.preventDefault();
    setformSubmitted(true);

    if (!isFormValid) return;
    dispatch( startCreatingUserWithEmailPassword(formState));
  
  }

  return (
    <>
        <Grid  container
        
        // direction="column"
           justifyContent='center' 
           alignItems='center'
           sx={ {minHeight: '100vh', backgroundColor: 'primary.light'}}>


    <Grid item className='box-shadow' sx={ {backgroundColor:'white',  borderRadius:3, padding:2}}  xs={8} sm={4} md={3} lg={2}>
    <Grid container sx={ {padding:2}}justifyContent='center' className='animate__animated animate__fadeIn animate__fast' >

      
      <Grid container  direction="column" alignItems='center' >
        <HowToReg sx={ {  color:'primary.dark' }} fontSize='large'/>
        <Typography variant='h5' sx={ {m:1, fontWeight: 500, color:'primary.dark' }} >Registro</Typography>
      </Grid>
      
      

      <form  onSubmit={ onSubmit}>
        <Grid item xs={12}>
          <TextField 
          label='Nombre' 
          type='text' 
          placeholder='Tu nombre' 
          fullWidth  
          name='displayName' 
          sx={ {mt:1, backgroundColor:'primary.light' }} 
          value={ displayName} 
          onChange={ onInputChange}
          error={ !!displayNameValid && formSubmitted }
          helperText={ displayNameValid}
          />

        </Grid>
        <Grid item xs={12}>
          <TextField 
          label='Correo' 
          type='email' 
          placeholder='email' 
          name='email' 
          fullWidth 
          value={ email }
          sx={ {mt:1, backgroundColor:'primary.light' }} 
          onChange={ onInputChange}
          error={ !!emailValid && formSubmitted}
          helperText={ emailValid}/>

        </Grid>
        <Grid>
          <TextField 
                  label='Contraseña' 
                  type='password' 
                  placeholder='Contraseña' 
                  name='password' 
                  fullWidth 
                  sx={ {mt:1, backgroundColor:'primary.light'}} 
                  value={ password}
                  onChange={ onInputChange}
                  error={ !!passwordValid && formSubmitted}
                  helperText={ passwordValid}/>

        </Grid>

        <Grid container sx={ {mb:2, mt:1}} spacing={1}>

        <Grid item xs={12} display={ !!errorMessage ? '': 'none'}>
                <Alert severity='error'>
                {errorMessage}
                </Alert>

              </Grid> 

        <Grid item xs={12} >
          <Button 
            variant="contained" 
            sx={ {backgroundColor: 'primary.main', padding:1}} 
            type='submit' 
            fullWidth 
            disabled={ isCheckingAuthentication }
            >Crear cuenta</Button>
        </Grid>


        </Grid>

        <Grid container direction='row' justifyContent='end'>
          <Typography  sx={ {mr:1, fontSize:13}} >Ya tienes cuenta?</Typography>
          <Link component={ Link } color='inherit' to="/login"> Ingresar</Link>
        </Grid>

      </form>
    
    
    
    
    </Grid>
    </Grid>

   
  
</Grid>
    </>
  )
}
