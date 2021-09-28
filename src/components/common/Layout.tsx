import {Avatar, Typography, IconButton, Container, Grid, makeStyles, Paper, Card, CardActionArea, CardMedia, CardContent, Box, Button } from "@material-ui/core";
import { withTheme } from './Theme';
import MailIcon from '@material-ui/icons/Mail';
import Facebook from '@material-ui/icons/Facebook';
import Instagram from '@material-ui/icons/Instagram';
import BG from '../../assets/img/bg.svg';
import Logo from '../../assets/img/logo.png';

import ImageLink from '../../assets/img/dark-ui-form.png';
import Service1 from '../../assets/img/service1.png';
import Service2 from '../../assets/img/service2.png';
import Service3 from '../../assets/img/service3.png';

import Behance from '../../assets/img/behance.png';
import Linkedin from '../../assets/img/linkedin.png';

import LogoOhMyZone from '../../assets/img/logo-oh-my-zone.svg';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.scss';

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
    root: {
        borderRadius: 20,
        backgroundColor: theme.palette.primary.dark,
        height: 340,
        width: 280
    },
    media: {
        height: 150,
    },
    content: {
        height: 158,
        backgroundColor: theme.palette.primary.light,
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
    button: {
        backgroundColor: theme.palette.secondary.main,
        borderRadius: 30,
        margin: '14px 0',
        position: 'absolute',
        bottom: 0,
        width: '90%',
        "&.hover": {
            background:'black',
          },
    },
    footer: {
        marginTop:'4rem',
        justifyContent: 'center',
        display: 'flex',
    }
}));

const Layout = () => {
    const classes = useStyles();

    return (
        <>
            <img src={BG} className={classes.imgBackground} alt="background"/>
            <Container className={classes.headerContainer} maxWidth="xs">
                <Box className={classes.mainBoxContent}>
                    <Grid alignItems="center" direction="column" spacing={2} container>
                        <Grid item xs={12}>
                            <Avatar alt="Logo brand" src={Logo} className={classes.avatar}/>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color="textPrimary" variant="h5">NucleoDev</Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography color="textPrimary" align="center">Somos desarrolladores de otro planeta,
                            ¡haz contácto con nosotros!</Typography>
                        </Grid>
                    </Grid>
                    <Grid container justify="center" spacing={2}>
                        <Grid item>
                            <IconButton className={classes.iconButton} aria-label="mail">
                                <MailIcon fontSize="medium" />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton className={classes.iconButton} aria-label="mail">
                                <Facebook fontSize="medium" />
                            </IconButton>
                        </Grid>
                        <Grid item>
                            <IconButton className={classes.iconButton} aria-label="mail">
                                <Instagram fontSize="medium" />
                            </IconButton>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Paper className={classes.paper}>
                <Container maxWidth="xs">
                    <Grid container>
                        <Grid item>
                            <Typography variant="h6" className={classes.sectionTitle}>Recursos UI</Typography>
                        </Grid>
                    </Grid>
                </Container>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={'auto'}
                    centeredSlides={true}
                    freeMode={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <Card elevation={0} className={classes.root}>
                            <CardActionArea className={classes.cardActionArea}>
                            <CardMedia component="img" image={ImageLink} className={classes.media}/>
                                <CardContent className={classes.content}>
                                    <Typography variant="h6">
                                        UI kit dark mode
                                    </Typography>
                                    <Typography variant="body2">
                                        Descarga más de 100 componentes
                                        para usar en tus interfaces oscuras,
                                        ¡Completamente gratis!
                                    </Typography>
                                    <Box display="flex" justifyContent="center">
                                        <Button disableRipple={true} className={classes.button}>
                                            Descargar ahora
                                        </Button>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>
                </Swiper>
                <Container maxWidth="xs">
                    <Grid container>
                        <Grid item>
                            <Typography variant="h6" className={classes.sectionTitle}>Nuestros servicios</Typography>
                        </Grid>
                    </Grid>
                </Container>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={'auto'}
                    centeredSlides={true}
                    freeMode={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <Card elevation={0} className={classes.root}>
                            <CardActionArea className={classes.cardActionArea}>
                            <CardMedia component="img" image={Service1} className={classes.media}/>
                                <CardContent className={classes.content}>
                                    <Typography variant="h6">
                                       Diseño UI · UX
                                    </Typography>
                                    <Typography variant="body2">
                                        Diseñamos interfaces intuitivas e
                                        impactantes para tu producto digital.
                                    </Typography>
                                    <Box display="flex" justifyContent="center">
                                        <Button disableRipple={true} className={classes.button}>
                                            Más información
                                        </Button>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card elevation={0} className={classes.root}>
                            <CardActionArea className={classes.cardActionArea}>
                            <CardMedia component="img" image={Service2} className={classes.media}/>
                                <CardContent className={classes.content}>
                                    <Typography variant="h6">
                                        Desarrollo de Software
                                    </Typography>
                                    <Typography variant="body2">
                                        Creamos Páginas Web, eCommerce,
                                        Sistemas, Aplicaciones móviles y
                                        WebApps.
                                    </Typography>
                                    <Box display="flex" justifyContent="center">
                                        <Button disableRipple={true} className={classes.button}>
                                            Más información
                                        </Button>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card elevation={0} className={classes.root}>
                            <CardActionArea className={classes.cardActionArea}>
                                <CardMedia component="img" image={Service3} className={classes.media}/>
                                <CardContent className={classes.content}>
                                    <Typography variant="h6">
                                        Mentoría UX
                                    </Typography>
                                    <Typography variant="body2">
                                        Te ayudamos en cualquier fase de tu proyecto, capacitamos a tu equipo en Experiencia de usuario y diseño UI.
                                    </Typography>
                                    <Box display="flex" justifyContent="center">
                                        <Button disableRipple={true} className={classes.button}>
                                            Más información
                                        </Button>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>
                </Swiper>
                <Container maxWidth="xs">
                    <Grid container>
                        <Grid item>
                            <Typography variant="h6" className={classes.sectionTitle}>Nuestro portafolio</Typography>
                        </Grid>
                    </Grid>
                </Container>
                <Swiper
                    spaceBetween={0}
                    slidesPerView={'auto'}
                    centeredSlides={true}
                    freeMode={true}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                >
                    <SwiperSlide>
                        <Card elevation={0} className={classes.root}>
                            <CardActionArea className={classes.cardActionArea}>
                                <CardMedia component="img" image={Behance} className={classes.media}/>
                                <CardContent className={classes.content}>
                                    <Typography variant="h6">
                                        Behance
                                    </Typography>
                                    <Typography variant="body2">
                                        Mira nuestros diseños y desarrollos
                                        personales y para nuestros clientes.
                                    </Typography>
                                    <Box display="flex" justifyContent="center">
                                        <Button disableRipple={true} className={classes.button}>
                                            Ver Behance
                                        </Button>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Card elevation={0} className={classes.root}>
                            <CardActionArea className={classes.cardActionArea}>
                                <CardMedia component="img" image={Linkedin} className={classes.media}/>
                                <CardContent className={classes.content}>
                                    <Typography variant="h6">
                                        Linkedin
                                    </Typography>
                                    <Typography variant="body2">
                                        ¡Únete a nuestra comunidad en
                                        Linkedin y no te pierdas ninguno de
                                        nuestros post!
                                    </Typography>
                                    <Box display="flex" justifyContent="center">
                                        <Button disableRipple={true} className={classes.button}>
                                            Ver Linkedin
                                        </Button>
                                    </Box>
                                </CardContent>
                            </CardActionArea>
                        </Card>
                    </SwiperSlide>
                </Swiper>
                <footer className={classes.footer}>
                    <img src={LogoOhMyZone} alt="Oh my zone!" height={80}/>
                </footer>
            </Paper>
        </>
    )
}

export default withTheme(Layout);
