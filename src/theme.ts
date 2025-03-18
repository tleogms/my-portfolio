import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  palette: {
    primary: {
      main: '#FF5733' 
    },
    secondary: {
        main: '#E0C2FF',
        light: '#F5EBFF',
        contrastText: '#47008F',
    },
  },
  typography:{
        fontFamily: "Helvetica Neue"
  }
});

theme = responsiveFontSizes(theme);

export default theme;