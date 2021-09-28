import {CardType} from "../types/CardType";

export interface MainData {
    banner: BannerType;
    categories: CategoryType[]
}

type BannerType = {
    logoSrc:any;
    backgroundSrc:any;
    name:string;
    description:string;
    facebook?:string;
    instagram?:string;
    mail?:string;
}

type CategoryType = {
    title:string;
    cards: CardType[]
}

