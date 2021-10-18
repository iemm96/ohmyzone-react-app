import {Avatar, Typography, IconButton, Container, Grid, makeStyles, Box, styled} from "@material-ui/core";
import { withTheme } from './Theme';
import MailIcon from '@material-ui/icons/Mail';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import {handleClick} from "../../helpers/handleClick";
import {BannerType} from "../../types/BannerType";
import { useSpring, animated,useChain } from 'react-spring';
import { useSpringRef } from '@react-spring/web';
import {Phone} from "@material-ui/icons";

const useStyles = makeStyles(() => ({
    avatar: {
        height: 100,
        width: 100,
        boxShadow: 'rgba(100, 100, 111, 0.2) 0px 7px 29px 0px'
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

export const Banner = ({subtitle,name,description,logoSrc,backgroundSrc,facebook,instagram,mail,textColor,iconsColor,phone}:BannerType) => {
    const classes = useStyles();
    const bannerAnimationRef = useSpringRef();
    const bannerAnimationRef2 = useSpringRef();

    const bannerAnimationStyle = useAnimation(bannerAnimationRef);
    const bannerAnimationStyle2 = useAnimation(bannerAnimationRef2);

    useChain([bannerAnimationRef,bannerAnimationRef2])

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
                    <animated.div style={bannerAnimationStyle}>
                        <Grid alignItems="center" direction="column" spacing={1} container>
                            <Grid item xs={12}>
                                <Avatar alt="Logo brand" src={logoSrc} className={classes.avatar}/>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography color={textColor} align="center" variant="h5">{name}</Typography>
                            </Grid>
                            {subtitle &&
                            <Grid item xs={12}>
                                <Typography color={textColor} align="center" variant="h6">{subtitle}</Typography>
                            </Grid>}
                            <Grid item xs={12}>
                                <Typography color={textColor} align="center">{description}</Typography>
                            </Grid>
                        </Grid>
                    </animated.div>

                    <animated.div style={bannerAnimationStyle2}>
                        <Grid container justify="center" spacing={2}>
                            {phone &&
                            <Grid item>
                                <IconButton color={iconsColor} onClick={() => handleClick("tel:+" + phone)}  aria-label="mail">
                                    <Phone fontSize="medium" />
                                </IconButton>
                            </Grid>}
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
                    </animated.div>

                </Box>
            </Container>
        </>
    )
}

const useAnimation = (ref:any) => {
    const spring = useSpring({
        config: {
            duration: 400,
            easing: (t) => t
        },
        from: {
            y: -20,
            opacity: 0
        },
        to: {
            y:0,
            opacity: 1
        },
        delay:500,
        ref:ref
    });
    return spring;
}


export default withTheme(Banner);