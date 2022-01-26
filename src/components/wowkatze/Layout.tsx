import BG from '../../assets/wowkatze/background.svg';
import Logo from '../../assets/wowkatze/logo.png';

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
        title:"Collares",
        cards:[{
            title:"Modelo Lucy",
            description:"Hecho a mano con mucho cariño. Cuarzo electrificado y chapa de oro.",
            buttonText:"¡Ir a comprar!",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+me+gustaría+comprar+un+collar+Lucy",
            imageSrc:"https://res.cloudinary.com/nucleodev/image/upload/v1643140128/ohmyzone/wowkatze/collares/collar_modelo_lucy_fah4zm.jpg"
        },{
            title:"Modelo Amor de Júpiter",
            description:"Que elegancia la Júpiter, collar elaborado a mano con mucho amor, ojo de tigre y acero inoxidable.",
            buttonText:"¡Ir a comprar!",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+me+gustaría+comprar+un+collar+Amor+de+Jupiter",
            imageSrc:"https://res.cloudinary.com/nucleodev/image/upload/v1643141448/ohmyzone/wowkatze/collares/collar_modelo_amor_de_jupiter_vhkdla.jpg"
        },{
            title:"Modelo Cristal Estelar",
            description:"¡Protege tus sueños con este hermoso y mágico collar, amatista y chapa de oro!",
            buttonText:"¡Ir a comprar!",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+me+gustaría+comprar+un+collar+Cristal+Estelar",
            imageSrc:"https://res.cloudinary.com/nucleodev/image/upload/v1643141448/ohmyzone/wowkatze/collares/collar_modelo_cristal_estelar_k6kbxw.jpg"
        },{
            title:"Modelo Kira",
            description:"Irradía tu propia luz con Kira, elaborado con mucho amor, chapa de oro.",
            buttonText:"¡Ir a comprar!",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+me+gustaría+comprar+el+collar+modelo+Kira",
            imageSrc:"https://res.cloudinary.com/nucleodev/image/upload/v1643141448/ohmyzone/wowkatze/collares/collar_modelo_halia_gythce.jpg"
        },{
            title:"Modelo Halia",
            description:"Poderosa y hermosa como el mar, elaborado con mucho cariño, cuarzo electrificado azul y chapa de oro.",
            buttonText:"¡Ir a comprar!",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+me+gustaría+comprar+el+collar+modelo+Halia",
            imageSrc:"https://res.cloudinary.com/nucleodev/image/upload/v1643141447/ohmyzone/wowkatze/collares/collar_modelo_magia_marina_ydbgci.jpg"
        },{
            title:"Modelo Feeling love",
            description:"Hecho con más amor del que imaginas, acero inoxidable.",
            buttonText:"¡Ir a comprar!",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+me+gustaría+comprar+el+collar+modelo+Feeling+love",
            imageSrc:"https://res.cloudinary.com/nucleodev/image/upload/v1643141448/ohmyzone/wowkatze/collares/collar_modelo_feeling_love_l7otaq.jpg"
        },{
            title:"Modelo Lucy de acero",
            description:"Hecho a mano con mucho cariño. Cuarzo electrificado, chapa de rodio y acero inoxidable.",
            buttonText:"¡Ir a comprar!",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+me+gustaría+comprar+el+collar+modelo+Lucy+de+acero",
            imageSrc:"https://res.cloudinary.com/nucleodev/image/upload/v1643141447/ohmyzone/wowkatze/collares/collar_modelo_lucy_de_acero_aoqkh6.jpg"
        },{
            title:"Modelo Picos femeninos",
            description:"Hecho a mano con mucho cariño. Acero inoxidable.",
            buttonText:"¡Ir a comprar!",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+me+gustaría+comprar+el+collar+modelo+Picos+femeninos",
            imageSrc:"https://res.cloudinary.com/nucleodev/image/upload/v1643141447/ohmyzone/wowkatze/collares/collar_modelo_picos_femeninos_x4ozur.jpg"
        },{
            title:"Modelo Solana",
            description:"Hecho a mano con mucho cariño. Acero inoxidable, cuarzo electrificado y chapa de rodio.",
            buttonText:"¡Ir a comprar!",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+me+gustaría+comprar+el+collar+modelo+Solana",
            imageSrc:"https://res.cloudinary.com/nucleodev/image/upload/v1643141447/ohmyzone/wowkatze/collares/collar_modelo_solana_wwh5ba.jpg"
        },{
            title:"Modelo Chica lunar",
            description:"Hecho a mano con mucho cariño. Chapa de oro.",
            buttonText:"¡Ir a comprar!",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+me+gustaría+comprar+el+chocker+modelo+Chica+lunar",
            imageSrc:"https://res.cloudinary.com/nucleodev/image/upload/v1643141447/ohmyzone/wowkatze/collares/chocker_modelo_chica_lunar_pahxjs.jpg"
        },{
            title:"Modelo Sirio",
            description:"Hecho a mano con mucho cariño. Acero inoxidable y cristal.",
            buttonText:"¡Ir a comprar!",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+me+gustaría+comprar+el+collar+modelo+Sirio",
            imageSrc:"https://res.cloudinary.com/nucleodev/image/upload/v1643141447/ohmyzone/wowkatze/collares/collar_modelo_sirio_frxtz7.jpg"
        }]
    },{     
        title: "Aretes",
        cards:[{
            title: "Modelo Meissa",
            description:"Las estrellas mas brillantes de la constelación de Orion, para tus oidos. Hecho a mano y con amor, con Amatista y chapa de oro.",
            buttonText:"¡Ir a comprar!",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+me+gustaría+comprar+los+aretes+Meissa",
            imageSrc: "https://res.cloudinary.com/nucleodev/image/upload/v1643149748/ohmyzone/wowkatze/aretes/aretes_modelo_meissa_vxbmlt.jpg"
        },{
            title: "Modelo Naira",
            description:"Protégete con estos lindos ojos. Chapa de rodio.",
            buttonText:"¡Ir a comprar!",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+me+gustaría+comprar+los+aretes+Naira",
            imageSrc: "https://res.cloudinary.com/nucleodev/image/upload/v1643149747/ohmyzone/wowkatze/aretes/aretes_modelo_naira_bvhoh6.jpg"
        },{
            title: "Modelo Adhara",
            description:"La estrella más hermosa de la constelación Canis Major. Piedra de carburo de silicio y Chapa de oro.",
            buttonText:"¡Ir a comprar!",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+me+gustaría+comprar+los+aretes+Adhara",
            imageSrc: "https://res.cloudinary.com/nucleodev/image/upload/v1643149747/ohmyzone/wowkatze/aretes/aretes_modelo_adhara_epviap.jpg"
        },{
            title: "Modelo Neptuno",
            description:"Luce como la chica espacial que eres con Neptuno en tus oidos. Cristal y Chapa de oro.",
            buttonText:"¡Ir a comprar!",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+me+gustaría+comprar+los+aretes+Neptuno",
            imageSrc: "https://res.cloudinary.com/nucleodev/image/upload/v1643149747/ohmyzone/wowkatze/aretes/aretes_modelo_neptuno_uf7fca.jpg"
        },{
            title: "Modelo Grumpy Neko",
            description:"Kawaii pero con carácter, Grumpy Neko son para tí. Broquel en Chapa de oro, dije en aleación.",
            buttonText:"¡Ir a comprar!",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+me+gustaría+comprar+los+aretes+Grumpy+Neko",
            imageSrc: "https://res.cloudinary.com/nucleodev/image/upload/v1643149747/ohmyzone/wowkatze/aretes/aretes_modelo_grumpy_neko_aqindl.jpg"
        },{
            title: "Modelo Bianca",
            description:"La luna más blanca y hermosa para tus oidos. Cuarzo rosa y Chapa de oro.",
            buttonText:"¡Ir a comprar!",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+me+gustaría+comprar+los+aretes+Bianca",
            imageSrc: "https://res.cloudinary.com/nucleodev/image/upload/v1643149747/ohmyzone/wowkatze/aretes/aretes_modelo_bianca_silp2o.jpg"
        },{
            title: "Modelo Kaonashi Ghibli",
            description:"Si eres amante de las peliculas de studio Ghibli, Kaonashi son para tí. CBroquel en Chapa de oro y dije en aleación.",
            buttonText:"¡Ir a comprar!",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+me+gustaría+comprar+los+aretes+Kaonashi+Ghibli",
            imageSrc: "https://res.cloudinary.com/nucleodev/image/upload/v1643149747/ohmyzone/wowkatze/aretes/aretes_modelo_kaonashi_Ghibli_v3ztgk.jpg"
        }]
    },{
        title: "Pulseras",
        cards:[{
            title: "Modelo Celeste",
            description:"El brazalete más mágico de tu colección. Hecho a mano y con amor, con ágata congelada y chapa de oro.",
            buttonText:"¡Ir a comprar!",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+me+gustaría+comprar+la+pulsera+Celeste",
            imageSrc: "https://res.cloudinary.com/nucleodev/image/upload/v1643150821/ohmyzone/wowkatze/Pulseras/brazalete_modelo_celeste_xuutf8.jpg"
        },{
            title: "Modelo Vía lactea",
            description:"Hecho a mano y con amor, con ágatas, ojo de tigre para júpiter y chapa de oro.",
            buttonText:"¡Ir a comprar!",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+me+gustaría+comprar+la+pulsera+Via+lactea",
            imageSrc: "https://res.cloudinary.com/nucleodev/image/upload/v1643150891/ohmyzone/wowkatze/Pulseras/pulsera_modelo_via_lactea_m10wng.jpg"
        },{
            title: "Modelo Estrella Llameante",
            description:"Hecho a mano y con amor, con ágatas y chapa de oro.",
            buttonText:"¡Ir a comprar!",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+me+gustaría+comprar+la+pulsera+Estrella+llameante",
            imageSrc: "https://res.cloudinary.com/nucleodev/image/upload/v1643150823/ohmyzone/wowkatze/Pulseras/brazalete_modelo_nebulosa_estrella_llameante_sg2dyp.jpg"
        },{
            title: "Modelo Selene",
            description:"Hecho a mano y con amor, con ágatas y chapa de oro.",
            buttonText:"¡Ir a comprar!",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+me+gustaría+comprar+la+pulsera+Selene",
            imageSrc: "https://res.cloudinary.com/nucleodev/image/upload/v1643150891/ohmyzone/wowkatze/Pulseras/pulsera_modelo_selene_eeqhjf.jpg"
        },{
            title: "Modelo Protégeme",
            description:"Hecho a mano y con amor, con ojos turcos y chapa de oro.",
            buttonText:"¡Ir a comprar!",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+me+gustaría+comprar+la+pulsera+Protegeme",
            imageSrc: "https://res.cloudinary.com/nucleodev/image/upload/v1643150827/ohmyzone/wowkatze/Pulseras/modelo_protegeme_a8cbed.jpg"
        }]
    },{
        title: "Anillos",
        cards:[{
            title: "Anillos mágicos",
            description:"Elaborados con piedras naturales, ojos turcos y chapa de oro.",
            buttonText:"¡Ir a comprar!",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+me+gustaría+comprar+un+anillo",
            imageSrc: "https://res.cloudinary.com/nucleodev/image/upload/v1643226631/ohmyzone/wowkatze/anillos/photo_2022-01-26_13-50-04_svp8bn.jpg"
        }]
    },{
        title:"Mis links",
        cards:[{
            title:"Tienda en línea",
            description:"Envíos y descuentos especiales a toda la república mexicana.",
            buttonText:"¡Visitar!",
            url: "https://wowkatze.mx/",
            imageSrc:"https://res.cloudinary.com/nucleodev/image/upload/v1643223584/ohmyzone/redes_sociales/ecommerce_bim8db.jpg"
        },{
            title:"Instagram",
            description:"No te pierdas ninguna de mis creaciones.",
            buttonText:"Sígueme en Instagram",
            url: "https://www.instagram.com/wowkatzeoficial/",
            imageSrc:"https://res.cloudinary.com/nucleodev/image/upload/v1643223584/ohmyzone/redes_sociales/instagram_olts63.jpg"
        },{
            title:"Facebook",
            description:"No te pierdas ninguna de mis creaciones.",
            buttonText:"Sígueme en Facebook",
            url: "https://www.facebook.com/WowKatze",
            imageSrc:"https://res.cloudinary.com/nucleodev/image/upload/v1643223806/ohmyzone/redes_sociales/facebook_nemdof.png"
        },{
            title:"TikTok",
            description:"No te pierdas ninguna de mis creaciones.",
            buttonText:"Sígueme en TikTok",
            url: "https://vm.tiktok.com/ZM8hVFEvm/",
            imageSrc:tiktok
        },{
            title:"Whatsapp",
            description:"¿Tienes alguna duda? Escríbeme",
            buttonText:"Enviar whatsApp",
            url: "https://api.whatsapp.com/send/?phone=523314317251&text=Hola,+quiero+consultar+",
            imageSrc:"https://res.cloudinary.com/nucleodev/image/upload/v1643223584/ohmyzone/redes_sociales/whatsapp_wkbuep.png"
        }]
    },{
        title:"Zonas de entrega",
        cards:[{
            title:"Parque Rojo",
            description:"Entregas todos los sábados de 2 a 3 p.m.",
            buttonText:"¡Ver Mapa!",
            url: "https://goo.gl/maps/KYDGjijLWG3aHJw89",
            imageSrc:"https://res.cloudinary.com/nucleodev/image/upload/v1643222615/ohmyzone/wowkatze/Zonas%20de%20entrega/parque_rojo_ktiv01.png"
        },{
            title:"Mukha Showroom tlaquepaque",
            description:"Lunes a Domingo de 11:00 a.m. a 7:30 p.m. Calle Independencia #248, local K. Parian, Tlaquepaque, Jalisco.",
            buttonText:"Ver Mapa",
            url: "https://goo.gl/maps/yyNbrdhhxXcgMfrU6",
            imageSrc:"https://res.cloudinary.com/nucleodev/image/upload/v1643222907/ohmyzone/wowkatze/Zonas%20de%20entrega/mukha_tlaquepaque_zcmebe.png"
        },{
            title:"Mukha Showroom Minerva",
            description:"Lunes a Viernes de 11:00 a.m. a 7:30 p.m. Av. Vallarta #3005, Col. Vallarta Poniente, Guadalajara, Jalisco.",
            buttonText:"¡Ver Mapa!",
            url: "https://g.page/mukha-mx-showroom?share",
            imageSrc:"https://res.cloudinary.com/nucleodev/image/upload/v1643222615/ohmyzone/wowkatze/Zonas%20de%20entrega/mukha_minerva_smr2fq.jpg"
        }]
    }
]
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
