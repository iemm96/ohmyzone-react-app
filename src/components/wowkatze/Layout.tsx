import BG from '../../assets/wowkatze/background.svg';
import Logo from '../../assets/wowkatze/logo.png';
import img1 from '../../assets/wowkatze/img1.jpg';
import img2 from '../../assets/wowkatze/img2.jpg';
import img3 from '../../assets/wowkatze/img3.jpg';
import img4 from '../../assets/wowkatze/img4.jpg';

import tiktok from '../../assets/wowkatze/tiktok.png';

import { Banner } from "../common/Banner";
import { MainContent } from "../common/MainContent";
import {MainData} from "../../interfaces/mainData";
import {ThemeProvider, createTheme} from '@material-ui/core';
import {useEffect} from "react";
import {changeBodyBackground} from "../../helpers/changeBodyBackground";
import {changeDocumentTitle} from "../../helpers/changeDocumentTitle";

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
            title:"Chocker Purple Agate",
            description:"echo a mano por manos mexicanas con mucho cariño. Ágata natural morada envuelta artesanalmente con alambre chapado en oro.",
            buttonText:"¡Ir a comprar!",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+me+gustaría+comprar+un+Chocker+Purple+Agate",
            imageSrc:img1
        },{
            title:"Pendientes Ojitos llorones",
            description:"Elegantes y únicos pendientes con ojitos que todo lo ven, representan luz, sabiduría y al espíritu. Elaborados por manos mexicanas con mucho cariño.",
            buttonText:"¡Ir a comprar!",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+me+gustaría+comprar+los+Pendientes+Ojitos+llorones",
            imageSrc:img2
        },{
            title:"Pendientes Atrapa Sueños",
            description:"¡Protege tus sueños con estos hermosos pendientes!",
            buttonText:"¡Ir a comprar!",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+me+gustaría+comprar+los+Pendientes+atrapa+sueños",
            imageSrc:img3
        },{
            title:"Sakura Perlas",
            description:"Hermosos pendientes, elegantes y al mismo tiempo kawaii, elaborados a mano por manitas mexicanas kawaii.",
            buttonText:"¡Ir a comprar!",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+me+gustaría+comprar+los+Pendientes+de+Sakura+perlas",
            imageSrc:img4
        }]
    },{
        title:"Mis links",
        cards:[{
            title:"TikTok",
            description:"No te pierdas ninguna de mis creaciones.",
            buttonText:"Sígueme en TikTok",
            url: "https://vm.tiktok.com/ZM8hVFEvm/",
            imageSrc:tiktok
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
        changeDocumentTitle(`${mainData.banner.name} | OhMyZone!`);
    },[]);

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
