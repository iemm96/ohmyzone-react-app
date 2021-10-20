import {Typography, makeStyles, Card, CardActionArea, CardMedia, CardContent, Button } from "@material-ui/core";
import { withTheme } from './Theme';
import {handleClick} from "../../helpers/handleClick";
import {CardType} from "../../types/CardType";
import {truncateString} from "../../helpers/truncateString";

export const CardDesktop = ({title,description,buttonText,imageSrc,url}:CardType) => {

    const useStyles = makeStyles((theme?:any) => ({
        typography: {
            marginTop:16
        },
        root: {
            borderRadius: 20,
            backgroundColor: theme.palette.primary.dark,
            width: '100%',
            height: 220,
        },
        media: {
            [theme.breakpoints.up('md')]: {
                width: 350
            },
        },
        content: {
            height: '90%',
            backgroundColor: theme.palette.primary.light,
            padding: 16,
            position:'relative',
            width: '100%'
        },
        cardActionArea: {
            height: '100%',
            display: 'flex',
            width: '100%'
        },
        button: {
            backgroundColor: theme.palette.secondary.main,
            borderRadius: 30,
            margin: '14px 0',
            position: 'absolute',
            bottom: 0,
            width: '94%',
            "&.hover": {
                background:'black',
            },
            [theme.breakpoints.up('md')]: {
                bottom: 16,
                right: 16,
            },
        }
    }));

    const classes = useStyles();

    return (
        <Card elevation={0} className={classes.root}>
            <CardActionArea onClick={() => handleClick(url) } className={classes.cardActionArea}>
                <CardMedia component="img" image={imageSrc} className={classes.media}/>
                <CardContent className={classes.content}>
                    <Typography className={classes.typography} variant={title.length > 26 ? 'caption' : 'h6'}>
                        {truncateString(title,100)}
                    </Typography>
                    <Typography variant="body2">
                        {description}
                    </Typography>
                    <Button disableRipple={true} className={classes.button}>
                        {buttonText}
                    </Button>
                </CardContent>
            </CardActionArea>
        </Card>
    )
}

export default withTheme(CardDesktop);
