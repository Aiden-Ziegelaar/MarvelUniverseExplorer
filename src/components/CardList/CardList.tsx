import {useEffect, useState} from "react";
import {api} from "../../Api/interceptor";
import {AxiosRequestConfig} from "axios";
import {Button, CircularProgress, Grid, makeStyles, Typography} from "@material-ui/core";
import {IBaseDataContainer, IBaseDataWrapper} from "../../Types/BaseType";
import {ICharacter} from "../../Types/Character";
import {IComic} from "../../Types/Comic";
import {ICreator} from "../../Types/Creator";
import {IEvent} from "../../Types/Event";
import {ISeries} from "../../Types/Series";
import {IStory} from "../../Types/Story";
import ItemCard from "../ItemCard/ItemCard";

interface ICardListProps {
  resource: string,
  search: string
}

const useStyles = makeStyles((theme) => ({
  container: {
    width: '100%',
  },
  root: {
    margin: 30,
  },
  typography: {
    color: "white"
  },
  loadingContainer: {
    height: '100px',
    margin: "10",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  button: {
    background: '#a80d15',
    '&:disabled': {
      background: '#360408',
    },
    '&:hover': {
      background: '#76090e'
    },
  }
}));

function CardList(props: ICardListProps): JSX.Element {
  let [apiResponse, setApiResponse] = useState({} as
    IBaseDataWrapper<IBaseDataContainer<ICharacter | IComic | ICreator | IEvent | ISeries | IStory>>)
  let [loading, setLoading] = useState(true)
  let [parameters, setParameters] = useState({} as AxiosRequestConfig)

  const pathArr = props.resource.split("/")
  const baseDataType = pathArr[pathArr.length-1].toLowerCase()
  const classes = useStyles();

  useEffect(() => {
    if (props.search === ''){
      setParameters({
        params: {}
      });
      return;
    }
    if (['characters', 'creators', 'events'].includes(baseDataType)) {
      setParameters({
        params:{
          nameStartsWith: props.search
        }
      })
      return;
    }
    if (['comics', 'series'].includes(baseDataType)) {
      setParameters({
        params:{
          titleStartsWith: props.search
        }
      })
      return;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.search, baseDataType])

  useEffect(() => {
    async function getData(): Promise<void> {
      setLoading(true);
      const resp = await api.get(props.resource, parameters)
      setApiResponse(resp.data)
      setLoading(false);
    }
    getData();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parameters])

  if(loading) {
    return (
      <div className={classes.loadingContainer}>
        <CircularProgress color="secondary" />
      </div>
    )
  }

  function pagination() : JSX.Element {
    const pages = Math.ceil((apiResponse.data?.total || 0) / (apiResponse.data?.limit || 1))
    const currentPage = pages? ((apiResponse.data?.offset || 0) / (apiResponse.data?.limit || 1)+1) : 0

    function setOffset(offset: number) {
      setParameters({
        params: {
          ...parameters.params,
          offset
        }
      })
    }

    if(loading) {
      return (
        <div/>
      )
    }

    return (
      <Typography variant="h5" className={classes.typography}>
        <Button
          className={classes.button}
          disabled={currentPage === 1 || currentPage === 0}
          onClick={() => {
            setOffset((currentPage-2) * (apiResponse.data?.limit || 0))
          }}>
          <Typography variant="h5" className={classes.typography}>&lt;</Typography>
        </Button> 
        &nbsp;&nbsp;{currentPage}/{pages}&nbsp;&nbsp;
        <Button
          className={classes.button}
          disabled={pages === currentPage}
          onClick={() => {
            setOffset(currentPage * (apiResponse.data?.limit || 0))
          }}>
          <Typography variant="h5" className={classes.typography}>&gt;</Typography>
        </Button>
      </Typography>
    )
  }

  function gridOrLoader() : JSX.Element {
    if(!apiResponse.data?.results || apiResponse.data?.results.length === 0 ) {
      console.log(apiResponse)
      return (
        <div className={classes.loadingContainer}>
          <Typography className={classes.typography}>
            No Data Available...
          </Typography>
        </div>
      )
    }
    return (
      <Grid container className={classes.container} spacing={2} justify={'center'}>
        {apiResponse.data?.results?.map((item) => {
          return (
            <Grid item>
              <ItemCard data={item}/>
            </Grid>
          )
        })}
      </Grid>
    )
  }

  return (
    <div className={classes.root}>
      {gridOrLoader()}
      <br/>
      {pagination()}
    </div>
  )
}

export default CardList