import {AppBar, IconButton, makeStyles, Toolbar, Typography} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import MarvelLogo from "../../Assets/MarvelLogo.svg";

interface IHeaderProps {
  onMenu: ()=> void
}

const useStyles = makeStyles((theme) => ({
  titleBox: {
    flexGrow: 1,
    align: "center"
  },
  title: {
    'font-family': 'Staatliches'
  },
  marvelLogo: {
    height:50
  },
  grey: {
    backgroundColor: "#444444",
  },
  endSpace: {
    width: 36
  }
}));

function Header (props: IHeaderProps): JSX.Element {
  const classes = useStyles();
  return (
    <AppBar position="sticky">
      <Toolbar variant={'dense'}>
        <IconButton edge="start" color="inherit" aria-label="menu" onClick={props.onMenu}>
          <MenuIcon />
        </IconButton>
        <div className={classes.titleBox}>
          <img src={MarvelLogo} className={classes.marvelLogo} alt="Marvel"/>
        </div>
        <div className={classes.endSpace}/>
      </Toolbar>
      <div className={classes.grey}>
        <Typography variant="h5" className={`${classes.title} ${classes.titleBox}` }>
          UNIVERSE EXPLORER
        </Typography>
      </div>
    </AppBar>
  )
}


export default Header;