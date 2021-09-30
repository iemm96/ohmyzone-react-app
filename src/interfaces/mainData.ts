import {CategoryType} from "../types/CategoryType";
import {BannerType} from "../types/BannerType";
import {StylesType} from "../types/StylesType";

export interface MainData {
    styles?: StylesType[];
    banner: BannerType;
    categories: CategoryType[];
}

