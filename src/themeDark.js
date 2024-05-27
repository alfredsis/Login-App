import { indigo, deepPurple } from "@mui/material/colors";
import { createTheme } from "@mui/material/styles";



const themeDark = createTheme({
      palette: {
        primary: {
          light: "#050C14",
          light1: "#0A1929",
          lightBorder: "#1e4976",
          main: "#0A1929",
          inputFont: '#132F4C',
          dark: "#EBEDF0",
          dark1: "#0059B2",
                    
        },
        secondary: {
          light: '#EBEDF0',
          light2: "#CBDDF0",
          main: '#c2e0ff',
          dark: '#0A1929',
        },
      },
      typography: {
        fontFamily: 'Poppins'
        
      }
  });

  export default themeDark;
  
  