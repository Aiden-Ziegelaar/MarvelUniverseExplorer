import {debounce, fade, InputBase, makeStyles} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import theme from "../../Helpers/Theme";
import React from "react";

interface ISearchProps {
  setSearch: React.Dispatch<React.SetStateAction<string>>
}

const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.75),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.85),
    },
    marginRight: 50,
    marginLeft: 50,
    width: '100%',
    maxWidth: '600px',
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  searchContainer: {
    display: 'flex',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
    paddingLeft: 50
  },
  inputInput: {
    // vertical padding + font size from searchIcon
    transition: theme.transitions.create('width'),
    width: '100%',
    minWidth: "100%"
  },
}));

function Search (props: ISearchProps): JSX.Element {
  const classes = useStyles(theme);
  const onChange = (e: any) => {
    props.setSearch(e.target?.value)
  }
  const debounceOnChange = debounce(onChange, 500)
  return (
    <div className={classes.searchContainer}>
      <div className={classes.search}>
        <div className={classes.searchIcon}>
          <SearchIcon />
        </div>
        <InputBase
          placeholder="Search…"
          classes={{
            root: classes.inputRoot,
            input: classes.inputInput,
          }}
          inputProps={{ 'aria-label': 'search' }}
          onChange={debounceOnChange}
        />
      </div>
    </div>
  )
}

export default Search;