import { Toolbar } from "@mui/material";
import { Box } from "@mui/system"
import { useState } from "react";
import { NavBar } from "./components/NavBar";
import { SideBar } from "./components/SideBar";


const drawerWidth = 240;

export const NotesLayout = ({children}) => {

  const [mobileOpen, setMobileOpen] = useState(false);
    
  const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
      
    };

  return (
    <Box sx={{ display: 'flex'}}>

        <NavBar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle}/>

        <SideBar drawerWidth={drawerWidth} handleDrawerToggle={handleDrawerToggle} mobileOpen={mobileOpen}/>
        
        <Box
            component='main'
            sx={{ flexGrow: 1, p:0}}
        > 
                <Toolbar/>
                { children}

        </Box>

    </Box>
  )
}
