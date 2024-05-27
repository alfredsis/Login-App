import { indigo, deepPurple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";



const theme = createTheme({
      palette: {
        primary: {
          light: "#F1F4F7",
          light1: "#fff",
          lightBorder: "#fff",
          main: "#2196f3",
          inputFont: "#F1F4F7",
          dark: "#001e3c",
          dark1: "#004c99",
                    
        },
        secondary: {
          light: '#e3f2fd',
          main: '#c2e0ff',
          dark: '#0A1929',
        },
      },
      typography: {
        fontFamily: 'Poppins'
        
      },
      breakpoints: {
        values: {
          xs: 0,
          sm: 800,
          md: 1150,
          lg: 1650,
          xl: 1700,
        },
      },
  });

  export default theme;
  
  