import {Typography, makeStyles, Card, CardActionArea, CardMedia, CardContent, Box, Button } from "@material-ui/core";
import { withTheme } from './Theme';

interface CardProps {
    title:string;
    description:string;
    buttonText:string;
    imageSrc:any;
}

const useStyles = makeStyles((theme?:any) => ({
    root: {
        borderRadius: 20,
        backgroundColor: theme.palette.primary.dark,
        height: 340,
        width: 280
    },
    media: {
        height: 150,
    },
    content: {
        height: 158,
        backgroundColor: theme.palette.primary.light,
    },
    imgBackground: {
        position: 'fixed',
        height: '600px',
        zIndex: -1,
        top: 0
    },
    iconButton: {
        color: 'white'
    },
    cardActionArea: {
        height: '100%' 
    },
    button: {
        backgroundColor: theme.palette.secondary.main,
        borderRadius: 30,
        margin: '14px 0',
        position: 'absolute',
        bottom: 0,
        width: '90%',
        "&.hover": {
            background:'black',
          },
    }
}));


export const CardComponent = ({title,description,buttonText,imageSrc}:CardProps) => {
    const classes = useStyles();

    return (
        <Card elevation={0} className={classes.root}>
            <CardActionArea className={classes.cardActionArea}>
                <CardMedia component="img" image={imageSrc} className={classes.media}/>
                <CardContent className={classes.content}>
                    <Typography variant="h6">
                        {title}
                    </Typography>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                    <Box display="flex" justifyContent="center">
                        <Button disableRipple={true} className={classes.button}>
                            {buttonText}
                        </Button>
                    </Box>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default withTheme(CardComponent);
