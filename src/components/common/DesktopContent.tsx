import {CategoryType} from "../../types/CategoryType";
import {Grid} from "@material-ui/core";
import TitleCategory from "./TitleCategory";
import {CardComponent} from "./CardComponent";

const DesktopContent = ({title,cards}:CategoryType) => {
    return(
        <>
            <TitleCategory title={title}/>
            <Grid container>
                {cards.map(card => (
                    <Grid container justifyContent="center" item xs={4}>
                        <CardComponent
                            title={card.title}
                            description={card.description}
                            buttonText={card.buttonText}
                            url={card.url}
                            imageSrc={card.imageSrc}/>
                    </Grid>
                ))}
            </Grid>
        </>

    )
}

export default DesktopContent;