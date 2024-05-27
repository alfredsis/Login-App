import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@mui/material'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import {App} from './App'
import { store } from './store'
import './styles.css'
import themeDark from './themeDark'
import theme from './theme'
import { Provider } from 'react-redux'
import { AuthRoutes } from './routes/AuthRoutes'
import { NotesPages } from './Pages/NotesPages'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Provider store={store}>
      <BrowserRouter>
      <CssBaseline/>
      {/* <App /> */}
      <NotesPages/>
      {/* <AuthRoutes/> */}
      
      </BrowserRouter>
      </Provider>
    </ThemeProvider>
    
  </React.StrictMode>
)
 