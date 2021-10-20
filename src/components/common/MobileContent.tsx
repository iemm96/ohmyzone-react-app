import {SwiperComponent} from "./SwiperComponent";
import {CategoryType} from "../../types/CategoryType";
import TitleCategory from "./TitleCategory";


const MobileContent = ({title,cards}:CategoryType) => {
    return(
        <>
            <TitleCategory title={title}/>
            <SwiperComponent cards={cards}/>
        </>)
}

export default MobileContent;