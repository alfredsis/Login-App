import { Divider, Drawer, List,Toolbar, Typography} from "@mui/material"
import { Box } from "@mui/system"
import { useSelector } from "react-redux"
import { SideBarItem } from "./SideBarItem"



export const SideBar = ({drawerWidth=240, handleDrawerToggle, mobileOpen }) => {

    const { displayName } = useSelector( state => state.auth);
    const {notes} = useSelector( state => state.noteStore);

    

  return (
    <Box
        component='nav'        
        sx={{ width: {sm: drawerWidth}, flexShrink: {sm: 0}, display: {xs:'none', sm:'inherit'}}}  //modificado el display
    >
        <Drawer
            variant="permanent"
            open
            sx={{
                display:{ xs: 'block'},
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth}
            }}
        >
            <Toolbar>
                <Typography 
                    variant="h6"
                    noWrap 
                    component='div'
                >{displayName}</Typography>
            </Toolbar>

            <Divider/>

            <List>
                {
                    notes.map( notes =>(
                        <SideBarItem key={notes.id} notes={notes}/>
                    ))
                }
            </List>
        </Drawer>

        <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{keepMounted: true}}
            sx={{
                display:{ xs: 'block'},
                '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth}
            }}
        >
            <Toolbar>
                <Typography 
                    variant="h6"
                    noWrap 
                    component='div'
                >{displayName}</Typography>
            </Toolbar>

            <Divider/>

            <List>
                {
                    notes.map( notes =>(
                        <SideBarItem key={notes.id} notes={notes}/>
                    ))
                }
            </List>
        </Drawer>
    </Box>
  )
}
