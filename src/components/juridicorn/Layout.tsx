import BG from '../../assets/juridicorn/bg.jpg';
import Logo from '../../assets/juridicorn/logo.jpeg';

import Image1 from '../../assets/juridicorn/1.jpg';
import Image2 from '../../assets/juridicorn/2.jpg';
import Image3 from '../../assets/juridicorn/3.jpg';
import Image4 from '../../assets/juridicorn/4.jpg';
import Image5 from '../../assets/juridicorn/5.jpg';
import Image6 from '../../assets/juridicorn/6.jpg';
import Image7 from '../../assets/juridicorn/7.jpg';
import Image8 from '../../assets/juridicorn/8.jpg';
import Image9 from '../../assets/juridicorn/9.jpg';
import Image10 from '../../assets/juridicorn/10.jpg';
import Image11 from '../../assets/juridicorn/11.jpg';
import Image12 from '../../assets/juridicorn/12.jpg';

import { Banner } from "../common/Banner";
import { MainContent } from "../common/MainContent";
import {MainData} from "../../interfaces/mainData";
import {ThemeProvider, createTheme} from '@material-ui/core';
import {useEffect} from "react";
import {changeBodyBackground} from "../../helpers/changeBodyBackground";
import {changeDocumentTitle} from "../../helpers/changeDocumentTitle";

const mainData:MainData = {
    banner: {
        iconsColor: "secondary",
        textColor: "secondary",
        name:"Corporativo jurídico RN",
        description:"Especialistas en consultoría jurídica\n" +
            "de alto nivel.",
        phone:"523333939183",
        facebook:"https://www.facebook.com/RN-Corporativo-Jur%C3%ADdico-107030548392132",
        instagram:"https://instagram.com/rn.corporativo",
        mail:"mailto:rn.corporativojuridico@gmail.com",
        logoSrc:Logo,
        backgroundSrc:BG
    },
    categories: [{
        title:"Derecho Administrativo",
        cards:[{
            title:"Anulación de multas vehiculares, estatales y federales.",
            description:"Promovemos medios de defensa en contra de autoridades para eliminar y/o reducir adeudos por multas, infracciones, o cualquier tipo de adeudo vehicular.",
            buttonText:"Más información",
            url: "https://api.whatsapp.com/send/?phone=523333939183&text=Hola,+quiero+más+información+sobre+el+servicio+de+Anulación+de+multas+vehiculares,+estatales+y+federales.",
            imageSrc:Image1
        },{
            title:"Anulación o descuento en adeudos con SIAPA.",
            description:"Tener adeudos importantes con SIAPA es común, sin embargo a través del juicio de nulidad logramos que pagues lo justo reduciendo o eliminando el adeudo de forma legal y segura.",
            buttonText:"Más información",
            url: "https://api.whatsapp.com/send/?phone=523333939183&text=Hola,+quiero+más+información+sobre+el+servicio+de+Anulación+o+descuento+en+adeudos+con+SIAPA.",
            imageSrc:Image12
        },{
            title:"Anulación de multas por Ayuntamiento.",
            description:"Asesoría profesional y medios de defensa legal en contra de autoridades por multas por licencias, permisos de protección civil, o inspecciones, así como su prevención y cumplimiento.",
            buttonText:"Más información",
            url: "https://api.whatsapp.com/send/?phone=523333939183&text=Hola,+quiero+más+información+sobre+el+servicio+de+Anulación+de+multas+por+Ayuntamiento.",
            imageSrc:Image3
        },{
            title:"Solicitud de prescripcion en adeudo predial.",
            description:"Sabías que si debes más de 5 años de predial los años que se excedan de 5 años ya no te los pueden cobrar, así mismo se puede reducir y/o anular tu adeudo predial.",
            buttonText:"Más información",
            url: "https://api.whatsapp.com/send/?phone=523333939183&text=Hola,+quiero+más+información+sobre+el+servicio+de+Solicitud+de+prescripcion+en+adeudo+predial.",
            imageSrc:Image4
        },{
            title:"Defensa contra autoridades.",
            description:"Promovemos medios de defensa como recursos legales contra autoridades que ejerzan acciones que afectan nuestros derechos, poniendo en riesgo nuestro patrimonio.",
            buttonText:"Más información",
            url: "https://api.whatsapp.com/send/?phone=523333939183&text=Hola,+quiero+más+información+sobre+el+servicio+de+Defensa+contra+autoridades.",
            imageSrc:Image5
        }]
    },{
        title:"Derecho Contractual",
        cards:[{
            title:"Contratos y Documentos Laborales.",
            description:"Asesoría profesional, elaboración de documentos y expedientes laborales para trabajadores y empresa con el fin de salvaguardar los intereses y el patrimonio de nuestros clientes.",
            buttonText:"Más información",
            url: "https://api.whatsapp.com/send/?phone=523333939183&text=Hola,+quiero+más+información+sobre+el+servicio+deContratos+y+Documentos+Laborales.",
            imageSrc:Image6
        },{
            title:"Contratos y Documentos Mercantiles.",
            description:"Consultoría jurídica, elaboración y revisión de Contratos típicos, atípicos y documentos legales, como el cobro extrajudicial de títulos de crédito como pagarés, cheques y letras de cambio.",
            buttonText:"Más información",
            url: "https://api.whatsapp.com/send/?phone=523333939183&text=Hola,+quiero+más+información+sobre+el+servicio+de+Contratos+y+Documentos+Mercantiles.",
            imageSrc:Image7
        },{
            title:"Contratos y Documentos Civiles.",
            description:"Consultoría Jurídica y elaboración de contratos y documentos para todas las relaciones contractuales, con el fin de salvaguardar el interés y patrimonio de nuestros clientes en sus actividades y negociaciones.",
            buttonText:"Más información",
            url: "https://api.whatsapp.com/send/?phone=523333939183&text=Hola,+quiero+más+información+sobre+el+servicio+de+Contratos+y+Documentos+Civiles.",
            imageSrc:Image8
        },{
            title:"Contratos y Documentos Propiedad Industrial.",
            description:"Asesoría profesional y Elaboración de documentos para tu sitio web o empresa, como aviso de privacidad, términos y condiciones los cuales son fundamentales para la protección de datos personales.",
            buttonText:"Más información",
            url: "https://api.whatsapp.com/send/?phone=523333939183&text=Hola,+quiero+más+información+sobre+el+servicio+de+Contratos+y+Documentos+Propiedad+Industrial.",
            imageSrc:Image9
        }]
    },{
        title:"Asesoría jurídica",
        cards:[{
            title:"Asesoría jurídica presencial.",
            description:"Asesoría por parte de nuestros abogados especialistas en derecho laboral, administrativo, penal, mercantil y civil en nuestras instalaciones.",
            buttonText:"Más información",
            url: "https://api.whatsapp.com/send/?phone=523333939183&text=Hola,+quiero+más+información+sobre+el+servicio+de+Asesoría+jurídica+presencial.",
            imageSrc:Image10
        },{
            title:"Asesoría jurídica telefónica.",
            description:"Asesoría jurídica por parte de nuestros abogados especialistas en derecho laboral, administrativo, penal, mercantil y civil a través de llamada Telefónica.",
            buttonText:"Más información",
            url: "https://api.whatsapp.com/send/?phone=523333939183&text=Hola,+quiero+más+información+sobre+el+servicio+de+Asesoría+jurídica+telefónica.",
            imageSrc:Image2
        },{
            title:"Asesoría jurídica online.",
            description:"Asesoría jurídica por parte de nuestros abogados especialistas en derecho laboral, administrativo, penal, mercantil y civil a través de medios digitales como mensajería y/o video llamada.",
            buttonText:"Más información",
            url: "https://api.whatsapp.com/send/?phone=523333939183&text=Hola,+quiero+más+información+sobre+el+servicio+de+Asesoría+jurídica+online.",
            imageSrc:Image11
        }]
    }]
};

const Layout = () => {

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
            type: "light",
            primary: {
                light: '#CFE0E8',
                main: '#FAFAFA',
                dark: '#B9CAD0'
            },
            secondary: {
                main: '#364559'
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

    useEffect(() => {
        changeBodyBackground("#FAFAFA");
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
                phone={mainData.banner.phone}
                facebook={mainData.banner.facebook}
                instagram={mainData.banner.instagram}
                mail={mainData.banner.mail}
            />
            <MainContent categories={mainData.categories}/>
        </ThemeProvider>
    )
}

export default Layout;
