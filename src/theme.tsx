import { createTheme } from '@mui/material/styles';
import { grey } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
  palette: {
    mode: 'dark',
    text: {
      primary: '#fff',
      secondary: grey[500],
    },
    background: {
      paper: grey[900],
    },

  },
});

export default theme;