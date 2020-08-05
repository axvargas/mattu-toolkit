import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';


const theme = responsiveFontSizes(createMuiTheme({
    palette: {
        primary: {
          light: "#bc477b",
          main: '#880e4f',
          dark: '#560027',
          contrastText: '#fff',
        },
        secondary: {
          light: '#ffff81',
          main: '#ffd54f',
          dark: '#c8a415',
          contrastText: '#000',
        },
      },
}));

export default theme;