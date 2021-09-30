export type StylesType = {
    typography: TypographyType;
    palette: PalletteType[];
}

type PalletteType = {
    type: string;
    primary: PrimaryPaletteType,
    secondary: SecondaryPaletteType,
}

type PrimaryPaletteType = {
    light: string;
    main: string;
    dark: string;
}

type SecondaryPaletteType = {
    main: string;
}

type TypographyType = {
    fontFamily: string,
    button: ButtonType;
    h5: HeadingType;
    h6: HeadingType;
}

type HeadingType = {
    fontWeight: number;
}

type ButtonType =  {
    textTransform: string;
    fontWeight: number;
}