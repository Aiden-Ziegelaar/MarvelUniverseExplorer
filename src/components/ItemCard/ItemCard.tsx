import {ICharacter} from "../../Types/Character";
import {IComic} from "../../Types/Comic";
import {ICreator} from "../../Types/Creator";
import {IEvent} from "../../Types/Event";
import {ISeries} from "../../Types/Series";
import {IStory} from "../../Types/Story";
import {Card, CardContent, CardMedia, CardActionArea, makeStyles, Typography} from "@material-ui/core";
import {useHistory} from "react-router-dom";
import normaliseForCard from "../../Helpers/NormaliseForCard";


interface IHeaderProps {
  data: ICharacter | IComic | ICreator | IEvent | ISeries | IStory
}

const useStyles = makeStyles((theme) => ({
  media: {
    height:180
  },
  card: {
    '&:hover': {
      boxShadow: '0 19px 38px rgba(0,0,0,0.30), 0 15px 12px rgba(0,0,0,0.22)',
      background: '#ffffff'
    },
    width: 200,
    background: '#e3e3e3'
  },
  title: {
    color: "#2377cb",
    'font-family': 'Staatliches'
  },
}));

function ItemCard (props: IHeaderProps): JSX.Element {
  const normalisedData = normaliseForCard(props.data)
  const classes = useStyles()

  const history = useHistory();

  function pushHistory () {
    history.push(normalisedData.link)
  }

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={pushHistory}>
        <CardMedia
          className={classes.media}
          image={normalisedData.image}
          title={normalisedData.title}
        />
        <CardContent>
          <Typography noWrap variant="h6" color="textSecondary" component="p" className={classes.title}>
            {normalisedData.title}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default ItemCard