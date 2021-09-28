import {Typography, makeStyles, Card, CardActionArea, CardMedia, CardContent, Box, Button } from "@material-ui/core";
import { withTheme } from './Theme';
import {handleClick} from "../../actions/handleClick";
import {CardType} from "../../types/CardType";

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


export const CardComponent = ({title,description,buttonText,imageSrc,url}:CardType) => {
    const classes = useStyles();

    return (
        <Card elevation={0} className={classes.root}>
            <CardActionArea onClick={() => handleClick(url) } className={classes.cardActionArea}>
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
