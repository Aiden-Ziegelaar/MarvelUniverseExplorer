import {useState} from "react";
import {makeStyles, Typography} from "@material-ui/core";
import Search from "../Search/Search";
import CardList from "./CardList";

interface ICardListProps {
  resource: string
}

const useStyles = makeStyles((theme) => ({
  container: {
    flexGrow: 1,
    width: '100%',
  },
  root: {
    marginTop: 30,
    marginBottom: 30
  },
  typography: {
    color: "white",
    'font-family': 'Staatliches'
  },
  loadingContainer: {
    height: '100px',
    margin: "10",
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
}));

function SearchableCardList(props: ICardListProps): JSX.Element {
  let [search, setSearch] = useState('')

  const pathArr = props.resource.split("/")
  const baseDataType = pathArr[pathArr.length-1].toLowerCase()
  const classes = useStyles();

  function searchable () : JSX.Element {

    if (baseDataType === 'stories') {
      return (
        <div/>
      )
    }
    return (
      <Search setSearch={setSearch} />
    )
  }

  return (
    <div className={classes.root}>
      <Typography variant="h5" className={classes.typography}>
        {baseDataType}
      </Typography>
      <br/>
      {searchable()}
      <br/>
      <CardList resource={props.resource} search={search}/>
    </div>
  )
}

export default SearchableCardList