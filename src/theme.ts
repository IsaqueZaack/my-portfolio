import { createTheme, responsiveFontSizes } from '@mui/material/styles';
let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: '#4f8e3e',
    },
  },
  typography: {
  fontFamily: 'Inter, sans-serif',
  h1: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 300,
  },
  h2: {
    fontFamily: 'Poppins, sans-serif',
    fontWeight: 300,
  },
},

});

theme = responsiveFontSizes(theme);

export default theme;
