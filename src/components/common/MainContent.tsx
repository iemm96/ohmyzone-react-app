import { Typography, Container, Grid, makeStyles, Paper, } from "@material-ui/core";
import { withTheme } from './Theme';
import LogoOhMyZone from '../../assets/img/logo-oh-my-zone.svg';
import { SwiperComponent } from "./SwiperComponent";

interface MainContentProps {
    categories:any
}

const useStyles = makeStyles((theme?:any) => ({
    sectionTitle: {
        margin: '16px 0'
    },
    btn: {
        color: 'white',
        borderRadius: 20
    },
    avatar: {
        height: 100,
        width: 100
    },
    headerContainer: {
        padding: '2rem 0',
    },
    mainBoxContent: {
        position:'fixed',
        padding: '1.5rem'
    },
    paper: {
        backgroundColor: theme.palette.primary.main,
        width: '100%',
        height: '100%',
        marginTop:500,
        position:'relative',
        zIndex: 2,
        bottom: 0,
        padding: '2rem 0 1rem 0',
        borderRadius: '10px 10px 0 0'
    },
    imgBackground: {
        position: 'fixed',
        height: '600px',
        zIndex: -1,
        top: 0
    },
    iconButton: {
        color: 'white'
    },
    cardActionArea: {
        height: '100%' 
    },
    footer: {
        marginTop:'4rem',
        justifyContent: 'center',
        display: 'flex',
    }
}));

export const MainContent = ({categories}:MainContentProps) => {
    const classes = useStyles();

    return (
        <Paper className={classes.paper}>
            {categories.map((val:any) => {
                console.log(val);
                return(
                    <>
                        <Container maxWidth="xs">
                        <Grid container>
                            <Grid item>
                                <Typography variant="h6" className={classes.sectionTitle}>{val.title}</Typography>
                            </Grid>
                        </Grid>
                        </Container>
                        <SwiperComponent cards={val.cards}/>
                    </>
                )
            })}
            <footer className={classes.footer}>
                <img src={LogoOhMyZone} alt="Oh my zone!" height={80}/>
            </footer>
        </Paper>
    )
}


export default withTheme(MainContent);