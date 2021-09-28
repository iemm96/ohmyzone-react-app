import {Avatar, Typography, IconButton, Container, Grid, makeStyles, Box } from "@material-ui/core";
import { withTheme } from './Theme';
import MailIcon from '@material-ui/icons/Mail';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import {handleClick} from "../../actions/handleClick";
import {BannerType} from "../../types/BannerType";

const useStyles = makeStyles((theme:any) => ({
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
    imgBackground: {
        position: 'fixed',
        height: '600px',
        zIndex: -1,
        top: 0,
        [theme.breakpoints.up('md')]: {
            height: 'auto',
        },
    },
    iconButton: {
        color: 'white'
    },
}));

export const Banner = ({name,description,logoSrc,backgroundSrc,facebook,instagram,mail}:BannerType) => {
    const classes = useStyles();

    return (
        <>
            <img src={backgroundSrc} className={classes.imgBackground} alt="background"/>
            <Container className={classes.headerContainer} maxWidth="xs">
                <Box className={classes.mainBoxContent}>
                    <Grid alignItems="center" direction="column" spacing={2} container>
                        <Grid item xs={12}>
                            <Avatar alt="Logo brand" src={logoSrc} className={classes.avatar}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color="textPrimary" variant="h5">{name}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color="textPrimary" align="center">{description}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <IconButton onClick={() => handleClick(mail ? mail : '')} className={classes.iconButton} aria-label="mail">
                                <MailIcon fontSize="medium" />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton onClick={() => handleClick(facebook ? facebook : '')} className={classes.iconButton} aria-label="mail">
                                <Facebook fontSize="medium" />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton onClick={() => handleClick(instagram ? instagram : '')} className={classes.iconButton} aria-label="mail">
                                <Instagram fontSize="medium" />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </>
    )
}


export default withTheme(Banner);