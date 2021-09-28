import { Typography, Container, Grid, makeStyles, Paper, } from "@material-ui/core";
import { withTheme } from './Theme';
import LogoOhMyZone from '../../assets/img/logo-oh-my-zone.svg';
import { SwiperComponent } from "./SwiperComponent";
import {CategoryType} from "../../types/CategoryType";

interface MainContentProps {
    categories:CategoryType[]
}

const useStyles = makeStyles((theme?:any) => ({
    sectionTitle: {
        margin: '16px 0'
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
            {categories.map((category:CategoryType) => (
                <>
                    <Container maxWidth="xs">
                        <Grid container>
                            <Grid item>
                                <Typography variant="h6" className={classes.sectionTitle}>{category.title}</Typography>
                            </Grid>
                        </Grid>
                    </Container>
                    <SwiperComponent cards={category.cards}/>
                </>
            ))}
            <footer className={classes.footer}>
                <img src={LogoOhMyZone} alt="Oh my zone!" height={80}/>
            </footer>
        </Paper>
    )
}


export default withTheme(MainContent);