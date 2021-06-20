import {Drawer, List, ListItem, ListItemIcon, ListItemText, makeStyles} from "@material-ui/core";
import React from "react";
import { useHistory } from "react-router-dom";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import CreateIcon from '@material-ui/icons/Create';
import EventIcon from '@material-ui/icons/Event';
import ListAltIcon from '@material-ui/icons/ListAlt';
import BookIcon from '@material-ui/icons/Book';

const useStyles = makeStyles({
  list: {
    width: 250
  }
});

interface IMenuDrawerProps {
  open: boolean
  onClose: () => void
}

function MenuDrawer (props: IMenuDrawerProps): JSX.Element {
  const classes = useStyles();
  const history = useHistory();

  const icons: {[icon: string]: ()=> JSX.Element } = {
    Characters: (): JSX.Element => (<AccountCircleIcon/>),
    Comics: (): JSX.Element => (<MenuBookIcon/>),
    Creators: (): JSX.Element => (<CreateIcon/>),
    Events: (): JSX.Element => (<EventIcon/>),
    Series: (): JSX.Element => (<ListAltIcon/>),
    Stories: (): JSX.Element => (<BookIcon/>)
  }

  return (
    <Drawer open={props.open} onClose={props.onClose}>
      <div className={classes.list}>
        <List>
          {['Characters', 'Comics', 'Creators', 'Events', 'Series', /*'Stories' */].map((text) => (
            <ListItem button key={text} onClick={
              () => {
                props.onClose();
                history.push(`/${text.toLowerCase()}`)
            }}>
              <ListItemIcon>
                {icons[text]()}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </div>
    </Drawer>
  )
}

export default MenuDrawer