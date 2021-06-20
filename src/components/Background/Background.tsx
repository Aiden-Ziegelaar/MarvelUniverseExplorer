import {makeStyles} from "@material-ui/core";
import BackgroundImage from "../../Assets/BackgroundImage.png"

const useStyles = makeStyles((theme) => ({
  background: {
    'min-width': '100%',
    'min-height': '100%',
    background: `linear-gradient( rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.8) ), url(${BackgroundImage})`,
    backgroundPosition: 'center center',
    backgroundAttachment: 'fixed',
    backgroundSize: 'cover',
    position: 'absolute',
    top: 0,
  }
}));

export interface IBackgroundProps {
  children: JSX.Element | JSX.Element[];
}

function Background (props: IBackgroundProps): JSX.Element {
  const classes = useStyles()
  return (
    <div className={classes.background}>
      <div>{props.children}</div>
    </div>
  )
}

export default Background