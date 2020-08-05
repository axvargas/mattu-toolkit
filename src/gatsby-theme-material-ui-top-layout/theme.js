import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';


const theme = responsiveFontSizes(createMuiTheme({
    palette: {
        primary: {
            main: "#f542b0"
        },
        secondary: {
            main: "#35853d"
        },
        background: {
            type: 'dark'
        },
        type: 'dark',
    },
}));

export default theme;