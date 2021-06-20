import {makeStyles, Typography} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#444444",
    width: '100%',
    position: 'absolute',
    bottom: '0px',
    top: 'auto'
  },
  typography: {
    color: "white"
  }
}));

function Footer(): JSX.Element {
  const classes = useStyles();

  return (
      <div className={classes.container}>
        <Typography variant="h6" className={classes.typography}>
          Data provided by Marvel. © 2021 MARVEL
        </Typography>
      </div>
  )
}

export default Footer