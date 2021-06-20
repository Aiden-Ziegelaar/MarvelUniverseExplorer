import {useEffect, useState} from "react";
import {api} from "../../Api/interceptor";
import {useParams} from "react-router-dom"
import {CircularProgress, makeStyles, Typography} from "@material-ui/core";
import {IBaseDataContainer, IBaseDataWrapper} from "../../Types/BaseType";
import {ICharacter} from "../../Types/Character";
import {IComic} from "../../Types/Comic";
import {ICreator} from "../../Types/Creator";
import {IEvent} from "../../Types/Event";
import {ISeries} from "../../Types/Series";
import {IStory} from "../../Types/Story";
import {normaliseForDetails, IDetailsInfo} from "../../Helpers/NormaliseForDetails";

interface DetailsPageProps {
  resource: string
}

interface DetailsPageParams {
  id: string
}

const useStyles = makeStyles((theme) => ({
  loadingContainer: {
    height: '100px',
    margin: "10",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  typography: {
    color: "white",
    'font-family': 'Staatliches',
    wordWrap: "normal"
  },
  typographyHolder: {
    maxWidth: 600,
    background: 'rgba(0,0,0,0.4)',
    margin: 'auto',
    padding: 10
  },
  image: {
    height: 400
  },
  centering: {
    width: '100%',
    display: "flex",
    alignItems: 'center',
    justifyContent: 'center'
  }
}));

function DetailsPage (props:DetailsPageProps): JSX.Element {

  const {id} = useParams() as DetailsPageParams;
  const classes = useStyles();
  let [loading, setLoading] = useState(true)
  let [normalisedData, setNormalisedData] = useState({} as IDetailsInfo)

  useEffect(() => {
    async function getData() {
      setLoading(true);
      const resp = (await api.get(`${props.resource}/${id}`)).data as
        IBaseDataWrapper<IBaseDataContainer<ICharacter | IComic | ICreator | IEvent | ISeries | IStory>>
      setNormalisedData(normaliseForDetails(resp.data.results[0]))
      setLoading(false);
    }
    getData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  if(loading) {
    return (
      <div className={classes.loadingContainer}>
        <CircularProgress color="secondary" />
      </div>
    )
  }

  function conditionalDescription() : JSX.Element {
    if (normalisedData.description !== '') {
      return (
        <div className={classes.centering}>
          <div className={`${classes.typographyHolder}`}>
            <Typography variant="h5" color="textSecondary" component="p" className={classes.typography}>
              <Typography variant="h3" color="textSecondary" component="p" className={classes.typography}>
                Description
              </Typography>
              {normalisedData.description}
            </Typography>
          </div>
        </div>
      )
    }
    return (<div/>)
  }

  return (
    <div>
      <br/>
      <Typography variant="h3" color="textSecondary" component="p" className={classes.typography}>
        {normalisedData.title}
      </Typography>
      <br/>
      <img src={normalisedData.image} alt={normalisedData.title} className={classes.image}/>
      <br/>
      <br/>
      {conditionalDescription()}
    </div>
  )
}

export default DetailsPage