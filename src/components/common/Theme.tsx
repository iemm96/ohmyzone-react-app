import { ThemeProvider, createMuiTheme, Typography } from '@material-ui/core';

const darkTheme = createMuiTheme({
    typography: {
        fontFamily: '"Nunito", sans-serif',
        button: {
            textTransform:'none',
            fontWeight: 700
        },
        h5: {
            fontWeight: 700
        },
        h6: {
            fontWeight: 700
        }
    },
    palette: {
        type: "dark",
        primary: {
            light: '#000B57',
            main: '#00094A',
            dark: '#0F0338'
        },
        secondary: {
            main: '#FF1177'
        }
    }
});

const Theme = (props?:any) => {
    const { children } = props;
    return <ThemeProvider theme={darkTheme}>{children}</ThemeProvider>
};

export const withTheme = (Component?:any) => {
    return (props?:any) => {
        return(
            <Theme>
                <Component {...props}/>
            </Theme>
        )
    }
}