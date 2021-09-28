import { withTheme } from './Theme';
import BG from '../../assets/img/bg.svg';
import Logo from '../../assets/img/logo.png';

import ImageLink from '../../assets/img/dark-ui-form.png';
import Service1 from '../../assets/img/service1.png';
import Service2 from '../../assets/img/service2.png';
import Service3 from '../../assets/img/service3.png';

import Behance from '../../assets/img/behance.png';
import Linkedin from '../../assets/img/linkedin.png';

import { Banner } from "./Banner";
import { MainContent } from "./MainContent";

const mainData = {
    banner: {
        name:"NucleoDev",
        description:"Somos desarrolladores de otro planeta, ¡haz contácto con nosotros!",
        facebook:"https://facebook.com/nucleodevoficial",
        instagram:"https://instagram.com/nucleodevoficial",
        mail:"mailto:contacto@nucleodev.com",
    },
    categories: [{
        title:"Recursos UI",
        cards:[{
            title:"UI kit dark mode",
            description:"Descarga más de 100 componentes para usar en tus interfaces oscuras, ¡Completamente gratis!",
            buttonText:"Descargar gratis",
            imageSrc:ImageLink
        }]
    },{
        title:"Nuestros servicios",
        cards:[{
            title:"Diseño UI · UX",
            description:"Diseñamos interfaces intuitivas e impactantes para tu producto digital.",
            buttonText:"Más información",
            imageSrc:Service1
        },{
            title:"Desarrollo de software",
            description:"Creamos Páginas Web, eCommerce, Sistemas, Aplicaciones móviles y WebApps.",
            buttonText:"Más información",
            imageSrc:Service2
        },{
            title:"Mentoría UX",
            description:"Te ayudamos en cualquier fase de tu proyecto, capacitamos a tu equipo en Experiencia de usuario y diseño UI.",
            buttonText:"Más información",
            imageSrc:Service3
        }]
    },{
        title:"Nuestro portafolio",
        cards:[{
            title:"Behance",
            description:"Mira nuestros diseños y desarrollos personales y para nuestros clientes.",
            buttonText:"Ver Behance",
            imageSrc:Behance
        },{
            title:"LinkedIn",
            description:"Mira nuestros diseños y desarrollos personales y para nuestros clientes.",
            buttonText:"Ver LinkedIn",
            imageSrc:Linkedin
        }]
    }]
};

const Layout = () => {
    
    return (
        <>
            <Banner
                backgroundSrc={BG}
                logoSrc={Logo}
                name={mainData.banner.name}
                description={mainData.banner.description}
                facebook={mainData.banner.facebook}
                instagram={mainData.banner.instagram}
                mail={mainData.banner.mail}
            />
            <MainContent categories={mainData.categories}/>
        </>
    )
}

export default withTheme(Layout);
