import BG from '../../assets/wowkatze/background.svg';
import Logo from '../../assets/wowkatze/logo.png';

import Cereza from '../../assets/wowkatze/Cereza.png';
import Service1 from '../../assets/img/service1.png';
import Service2 from '../../assets/img/service2.png';
import Service3 from '../../assets/img/service3.png';

import Behance from '../../assets/img/behance.png';
import Linkedin from '../../assets/img/linkedin.png';

import { Banner } from "../common/Banner";
import { MainContent } from "../common/MainContent";
import {MainData} from "../../interfaces/mainData";
import {ThemeProvider, createTheme} from '@material-ui/core';
import {useEffect} from "react";
import {changeBodyBackground} from "../../actions/changeBodyBackground";

const mainData:MainData = {
    banner: {
        iconsColor: "primary",
        textColor: "primary",
        name:"Wow Katze!",
        description:"Accesorios juveniles, modernos y Kawaii.",
        facebook:"https://facebook.com/wowkatzeoficial",
        instagram:"https://instagram.com/wowkatzeoficial",
        mail:"mailto:wowkatzeoficial@gmail.com",
        logoSrc:Logo,
        backgroundSrc:BG
    },
    categories: [{
        title:"Más vendidos",
        cards:[{
            title:"Juicy Cherry",
            description:"Aretes de Cerezas en tamaño real, elaboradas con resina y chapa de oro.",
            buttonText:"Ir a comprar!",
            url: "https://drive.google.com/drive/folders/1asJSPo1ISmV6JEbV_njcvD3-oVFXDsLL?usp=sharing",
            imageSrc:Cereza
        }]
    },{
        title:"Nuestros servicios",
        cards:[{
            title:"Diseño UI · UX",
            description:"Diseñamos interfaces intuitivas e impactantes para tu producto digital.",
            buttonText:"Más información",
            url: "https://api.whatsapp.com/send/?phone=523323660598&text=Hola+me+quiero+más+información+sobre+el+servicio+de+UX+Design&app_absent=0",
            imageSrc:Service1
        },{
            title:"Desarrollo de software",
            description:"Creamos Páginas Web, eCommerce, Sistemas, Aplicaciones móviles y WebApps.",
            buttonText:"Más información",
            url: "https://api.whatsapp.com/send/?phone=523323660598&text=Hola+me+quiero+más+información+sobre+el+servicio+de+Desarrollo+de+Software&app_absent=0",
            imageSrc:Service2
        },{
            title:"Mentoría UX",
            description:"Te ayudamos en cualquier fase de tu proyecto, capacitamos a tu equipo en Experiencia de usuario y diseño UI.",
            buttonText:"Más información",
            url: "https://api.whatsapp.com/send/?phone=523323660598&text=Hola+me+quiero+más+información+sobre+el+servicio+de+Mentoría+UX&app_absent=0",
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

    const darkTheme = createTheme({
        typography: {
            fontFamily: '"Nunito", sans-serif',
            button: {
                textTransform:'none',
                fontWeight: 700
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
                light: '#32283B',
                main: '#191021',
                dark: '#FFFEFE'
            },
            secondary: {
                main: '#C25E7D'
            }
        }
    });

    useEffect(() => {
        changeBodyBackground("#191021");
    });

    return (
        <ThemeProvider theme={darkTheme}>
            <Banner
                iconsColor={mainData.banner.iconsColor}
                textColor={mainData.banner.textColor}
                backgroundSrc={mainData.banner.backgroundSrc}
                logoSrc={mainData.banner.logoSrc}
                name={mainData.banner.name}
                description={mainData.banner.description}
                facebook={mainData.banner.facebook}
                instagram={mainData.banner.instagram}
                mail={mainData.banner.mail}
            />
            <MainContent categories={mainData.categories}/>
        </ThemeProvider>
    )
}

export default Layout;
