import {PropTypes} from "@material-ui/core";
import Color = PropTypes.Color;

export type BannerType = {
    textColor:"inherit" | "initial" | "primary" | "secondary" | "textPrimary" | "textSecondary" | "error" | undefined;
    iconsColor:Color;
    logoSrc:any;
    backgroundSrc:any;
    name:string;
    description:string;
    facebook?:string;
    instagram?:string;
    mail?:string;
}
