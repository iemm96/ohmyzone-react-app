import { withTheme } from '../common/Theme';
import BG from '../../assets/nucleodev/dia_de_muertos.svg';
import Logo from '../../assets/img/logo.png';

import Wallpapers from '../../assets/nucleodev/wallpapers.png';
import Wxp from '../../assets/nucleodev/wxp.png';
import Website from '../../assets/nucleodev/website.png';
import Service1 from '../../assets/img/service1.png';
import Service2 from '../../assets/img/service2.png';
import Service3 from '../../assets/img/service3.png';

import Behance from '../../assets/img/behance.png';
import Linkedin from '../../assets/img/linkedin.png';

import { Banner } from "../common/Banner";
import { MainContent } from "../common/MainContent";
import {MainData} from "../../interfaces/mainData";
import {useEffect} from "react";
import {changeBodyBackground} from "../../helpers/changeBodyBackground";
import {changeDocumentTitle} from "../../helpers/changeDocumentTitle";
import {makeWhatsappUrl} from "../../helpers/makeWhatsappUrl";
import {createTheme, ThemeProvider} from "@material-ui/core";

const mainData:MainData = {
    banner: {
        textColor:"textPrimary",
        iconsColor:"default",
        name:"NucleoDev",
        description:"Somos desarrolladores de otro planeta, ¡haz contácto con nosotros!",
        facebook:"https://facebook.com/nucleodevoficial",
        instagram:"https://instagram.com/nucleodevoficial",
        mail:"mailto:contacto@nucleodev.com",
        phone: "523323660598",
        logoSrc:Logo,
        backgroundSrc:BG
    },
    categories: [{
        title:"Recursos y descargables",
        cards:[{
            title:"Wallpapers y más",
            description:"Descarga nuestros Wallpapers para que personalices tu dispositivo",
            buttonText:"Descargar gratis",
            url: "https://drive.google.com/drive/folders/1asJSPo1ISmV6JEbV_njcvD3-oVFXDsLL?usp=sharing",
            imageSrc:Wallpapers
        },{
            title:"eXPerience UI mini kit",
            description:"Archivo de Figma con componentes estilo Windows XP",
            buttonText:"Ver en Figma",
            url: "https://www.figma.com/community/file/1021093530465277612",
            imageSrc:Wxp
        }]
    },{
        title:"Nuestro universo",
        cards:[{
            title:"NucleoWeb",
            description:"¡Visita nuestra web creada para terrícolas!",
            buttonText:"Visitar web",
            url: "https://nucleodev.com",
            imageSrc:Website
        }]
    },{
        title:"Nuestros servicios",
        cards:[{
            title:"Diseño UI · UX",
            description:"Diseñamos interfaces intuitivas e impactantes para tu producto digital.",
            buttonText:"Más información",
            url: "https://api.whatsapp.com/send/?phone=523323660598&text=Hola+quiero+más+información+sobre+el+servicio+de+UX+Design&app_absent=0",
            imageSrc:Service1
        },{
            title:"Desarrollo de software",
            description:"Creamos Páginas Web, eCommerce, Sistemas, Aplicaciones móviles y WebApps.",
            buttonText:"Más información",
            url: "https://api.whatsapp.com/send/?phone=523323660598&text=Hola+quiero+más+información+sobre+el+servicio+de+Desarrollo+de+Software&app_absent=0",
            imageSrc:Service2
        },{
            title:"Mentoría UX",
            description:"Te ayudamos en cualquier fase de tu proyecto, capacitamos a tu equipo en Experiencia de usuario y diseño UI.",
            buttonText:"Más información",
            url: "https://api.whatsapp.com/send/?phone=523323660598&text=Hola+quiero+más+información+sobre+el+servicio+dentoría+UX&app_absent=0",
            imageSrc:Service3
        }]
    },{
        title:"Nuestro portafolio",
        cards:[{
            title:"Behance",
            description:"Mira nuestros diseños y desarrollos personales y para nuestros clientes.",
            buttonText:"Ver Behance",
            url: "https://www.behance.net/nucleodev",
            imageSrc:Behance
        },{
            title:"LinkedIn",
            description:"Mira nuestros diseños y desarrollos personales y para nuestros clientes.",
            buttonText:"Ver LinkedIn",
            url: "https://linkedin.com/company/nucleodev/",
            imageSrc:Linkedin
        }]
    }]
};

const Layout = () => {

    useEffect(() => {
        changeBodyBackground("#2E0134");
        changeDocumentTitle(`${mainData.banner.name} | OhMyZone!`);
        changeFavicon();
        console.log(makeWhatsappUrl(mainData.banner.phone,"Hola me interesa el servicio de desarrollo web"));
    },[]);

    const changeFavicon = async () => {
        const favicon = (document?.getElementById('favicon') as HTMLAnchorElement);
        console.log(favicon);
        favicon.href = 'https://stackoverflow.com/favicon.ico';
    }

    const darkTheme = createTheme({
        typography: {
            fontFamily: '"Nunito", sans-serif',
            button: {
                textTransform:'none',
                fontWeight: 700,
            },
            caption: {
                fontWeight: 700,
                fontSize:16
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
                light: '#560051',
                main: '#2E0134',
                dark: '#7A008B'
            },
            secondary: {
                main: '#EB6B00'
            }
        },
        overrides: {
            MuiButton: {
                label: {
                    color: "#ffffff",
                },
            },
        }
    });

    return (
        <>
            <ThemeProvider theme={darkTheme}>
                <Banner
                    subtitle={mainData.banner.subtitle}
                    iconsColor={mainData.banner.iconsColor}
                    textColor={mainData.banner.textColor}
                    backgroundSrc={mainData.banner.backgroundSrc}
                    logoSrc={mainData.banner.logoSrc}
                    name={mainData.banner.name}
                    description={mainData.banner.description}
                    phone={mainData.banner.phone}
                    facebook={mainData.banner.facebook}
                    instagram={mainData.banner.instagram}
                    mail={mainData.banner.mail}
                />
                <MainContent categories={mainData.categories}/>
            </ThemeProvider>
        </>
    )
}

export default withTheme(Layout);
