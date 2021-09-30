import {Avatar, Typography, IconButton, Container, Grid, makeStyles, Box, styled} from "@material-ui/core";
import { withTheme } from './Theme';
import MailIcon from '@material-ui/icons/Mail';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import {handleClick} from "../../actions/handleClick";
import {BannerType} from "../../types/BannerType";

const useStyles = makeStyles(() => ({
    avatar: {
        height: 100,
        width: 100
    },
    headerContainer: {
        padding: '2rem 0',
        display:'flex',
        justifyContent: 'center'
    },
    mainBoxContent: {
        position:'fixed',
        padding: '1.5rem'
    },
}));

export const Banner = ({name,description,logoSrc,backgroundSrc,facebook,instagram,mail,textColor,iconsColor}:BannerType) => {
    const classes = useStyles();

    const StyledBackgroundContainer = styled('div')(({theme}) => ({
        backgroundImage: `url(${backgroundSrc})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center top',
        backgroundSize: '900px',
        position: 'fixed',
        zIndex: -1,
        height: '100%',
        width: '100%',
        [theme.breakpoints.up('md')]: {
            backgroundSize: '100%',
        },
    }));

    return (
        <>
            <StyledBackgroundContainer/>
            <Container className={classes.headerContainer} maxWidth="xs">
                <Box className={classes.mainBoxContent}>
                    <Grid alignItems="center" direction="column" spacing={2} container>
                        <Grid item xs={12}>
                            <Avatar alt="Logo brand" src={logoSrc} className={classes.avatar}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color={textColor} align="center" variant="h5">{name}</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color={textColor} align="center">{description}</Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <IconButton color={iconsColor} onClick={() => handleClick(mail ? mail : '')}  aria-label="mail">
                                <MailIcon fontSize="medium" />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton color={iconsColor} onClick={() => handleClick(facebook ? facebook : '')}  aria-label="mail">
                                <Facebook fontSize="medium" />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton color={iconsColor} onClick={() => handleClick(instagram ? instagram : '')}  aria-label="mail">
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