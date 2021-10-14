import BG from '../../assets/juridicorn/bg.jpg';
import Logo from '../../assets/juridicorn/logo.jpeg';

import Image1 from '../../assets/juridicorn/1.jpg';
import Image2 from '../../assets/juridicorn/2.jpg';
import Image3 from '../../assets/juridicorn/3.jpg';
import Image4 from '../../assets/juridicorn/4.jpg';
import Image5 from '../../assets/juridicorn/5.jpg';

import { Banner } from "../common/Banner";
import { MainContent } from "../common/MainContent";
import {MainData} from "../../interfaces/mainData";
import {ThemeProvider, createTheme} from '@material-ui/core';
import {useEffect} from "react";
import {changeBodyBackground} from "../../actions/changeBodyBackground";
import {changeDocumentTitle} from "../../actions/changeDocumentTitle";

const mainData:MainData = {
    banner: {
        iconsColor: "secondary",
        textColor: "secondary",
        name:"Corporativo jurídico RN",
        description:"Especialistas en consultoría jurídica\n" +
            "de alto nivel.",
        facebook:"https://facebook.com/wowkatzeoficial",
        instagram:"https://instagram.com/wowkatzeoficial",
        mail:"mailto:wowkatzeoficial@gmail.com",
        logoSrc:Logo,
        backgroundSrc:BG
    },
    categories: [{
        title:"Juicios de nulidad",
        cards:[{
            title:"Anulación de multas vehiculares, estatales y federales.",
            description:"",
            buttonText:"Más información",
            url: "https://drive.google.com/drive/folders/1asJSPo1ISmV6JEbV_njcvD3-oVFXDsLL?usp=sharing",
            imageSrc:Image1
        },{
            title:"Anulación o descuento en adeudos con SIAPA.",
            description:"",
            buttonText:"Más información",
            url: "https://drive.google.com/drive/folders/1asJSPo1ISmV6JEbV_njcvD3-oVFXDsLL?usp=sharing",
            imageSrc:Image2
        },{
            title:"Anulación de multas por Ayuntamiento.",
            description:"",
            buttonText:"Más información",
            url: "https://drive.google.com/drive/folders/1asJSPo1ISmV6JEbV_njcvD3-oVFXDsLL?usp=sharing",
            imageSrc:Image3
        },{
            title:"Solicitud de prescripcion en adeudo predial.",
            description:"",
            buttonText:"Más información",
            url: "https://drive.google.com/drive/folders/1asJSPo1ISmV6JEbV_njcvD3-oVFXDsLL?usp=sharing",
            imageSrc:Image4
        },{
            title:"Defensa contra autoridades.",
            description:"",
            buttonText:"Más información",
            url: "https://drive.google.com/drive/folders/1asJSPo1ISmV6JEbV_njcvD3-oVFXDsLL?usp=sharing",
            imageSrc:Image5
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
                facebook={mainData.banner.facebook}
                instagram={mainData.banner.instagram}
                mail={mainData.banner.mail}
            />
            <MainContent categories={mainData.categories}/>
        </ThemeProvider>
    )
}

export default Layout;
