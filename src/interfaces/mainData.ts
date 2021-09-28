import {CategoryType} from "../types/CategoryType";

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

