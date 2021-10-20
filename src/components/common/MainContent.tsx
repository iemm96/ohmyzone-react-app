import {Container, makeStyles, Paper,} from "@material-ui/core";
import { withTheme } from './Theme';
import LogoOhMyZone from '../../assets/img/logo-oh-my-zone.svg';
import {CategoryType} from "../../types/CategoryType";
import {useEffect, useState} from "react";
import MobileContent from "./MobileContent";
import DesktopContent from "./DesktopContent";

interface MainContentProps {
    categories:CategoryType[]
}

const useStyles = makeStyles((theme?:any) => ({

    paper: {
        backgroundColor: theme.palette.primary.main,
        width: '100%',
        height: '100%',
        marginTop:500,
        position:'relative',
        zIndex: 2,
        bottom: 0,
        padding: '2rem 0 1rem 0',
        borderRadius: '10px 10px 0 0',
        [theme.breakpoints.up('md')]: {
            marginTop:700,
        },
    },
    footer: {
        marginTop:'4rem',
        justifyContent: 'center',
        display: 'flex',
    }
}));

export const MainContent = ({categories}:MainContentProps) => {
    const classes = useStyles();

    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {

        function handleResize() {
            setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    function getWindowDimensions() {
        const { innerWidth: width, innerHeight: height } = window;
        return {
            width,
            height
        };
    }

    return (
        <Paper className={classes.paper}>
            <Container maxWidth="lg">
                {windowDimensions.width < 900 ? categories.map((category:CategoryType) => (
                    <MobileContent title={category.title} cards={category.cards}/>
                )) : categories.map((category:CategoryType) => (
                    <DesktopContent title={category.title} cards={category.cards}/>
                ))}
            </Container>
            <footer className={classes.footer}>
                <img src={LogoOhMyZone} alt="Oh my zone!" height={80}/>
            </footer>
        </Paper>
    )
}


export default withTheme(MainContent);