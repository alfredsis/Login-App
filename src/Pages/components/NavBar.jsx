import { MenuOutlined, LogoutOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { useDispatch } from "react-redux"
import { startLogout } from "../../auth/thunks";




export const NavBar = ({drawerWidth, handleDrawerToggle}) => {

    const dispatch = useDispatch();

    const onLogout = () =>{
        dispatch( startLogout());
    }

  return (
    <AppBar
        position="fixed"
        sx={{ 
            width:{ sm:`calc(100% - ${drawerWidth}px)`},
            minHeight:'8vh', 
            backgroundColor:'primary',
            ml: { sm: `${drawerWidth}px`}
        }}
    >
        <Toolbar  >
            <IconButton
                color='inherit'
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr:2, display: {sm:'none'}}}
            >
                <MenuOutlined/>
            </IconButton>

            <Grid 
            container 
            direction='row' 
            justifyContent='space-between' 
            alignItems='center'>
                <Typography variant='h6' noWrap component='div'>Notas App</Typography>

                <IconButton color="inherit" onClick={onLogout}>
                    <LogoutOutlined />
                </IconButton>

            </Grid>
        </Toolbar>

    </AppBar>
    
  )
}
