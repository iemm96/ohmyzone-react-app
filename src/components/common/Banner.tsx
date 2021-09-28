import {Avatar, Typography, IconButton, Container, Grid, makeStyles, Box } from "@material-ui/core";
import { withTheme } from './Theme';
import MailIcon from '@material-ui/icons/Mail';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';

interface BannerProps {
    backgroundSrc?: any;
    logoSrc: any;
    name: string;
    description: string;
    facebook?: string;
    mail?: string;
    instagram?: string;
}

const useStyles = makeStyles((theme?:any) => ({
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
        top: 0
    },
    iconButton: {
        color: 'white'
    },
}));

export const Banner = ({name,description,logoSrc,backgroundSrc,facebook,instagram,mail}:BannerProps) => {
    const classes = useStyles();

    const handleClickButton = (url?:string) => {
        window.open(url, '_blank');
    }

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
                            <IconButton onClick={() => handleClickButton(mail)} className={classes.iconButton} aria-label="mail">
                                <MailIcon fontSize="medium" />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton onClick={() => handleClickButton(facebook)} className={classes.iconButton} aria-label="mail">
                                <Facebook fontSize="medium" />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton onClick={() => handleClickButton(instagram)} className={classes.iconButton} aria-label="mail">
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