import {Container, Grid, makeStyles, Typography} from "@material-ui/core";
import {withTheme} from "./Theme";

const useStyles = makeStyles((theme:any) => ({
    sectionTitle: {
        margin: '16px 0',
        [theme.breakpoints.up('md')]: {
            marginTop:40,
            textAlign: 'center'
        },
    },
    sectionContainer: {
        justifyContent: 'center'
    }
}));

const TitleCategory = ({title}:any) => {
    const classes = useStyles();

    return(
    <Container maxWidth="xs">
        <Grid container className={classes.sectionContainer}>
            <Grid item>
                <Typography variant="h6" className={classes.sectionTitle}>{title}</Typography>
            </Grid>
        </Grid>
    </Container>);
};

export default withTheme(TitleCategory);
