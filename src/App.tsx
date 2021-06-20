import React from 'react';

import {MuiThemeProvider} from "@material-ui/core";
import {theme} from "./Helpers/Theme"

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SearchableCardList from "./Components/CardList/SearchableCardList";
import DetailsPage from "./Components/DetailsPage/DetailsPage";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Background from "./Components/Background/Background";
import MenuDrawer from "./Components/MenuDrawer/MenuDrawer";

import "./App.css"

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false)
  return (
    <Router>
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <Background>
            <Header onMenu={(): void => {
              setMenuOpen(true)
            }}/>
            <MenuDrawer open={menuOpen} onClose={(): void => {
              setMenuOpen(false)
            }}/>
            <Switch>
              <Route exact path="/" render={() => <SearchableCardList resource={"/characters"}/>} />
              <Route path="/characters/:id" render={() => <DetailsPage resource={"/characters"}/>} />
              <Route path="/comics/:id" render={() => <DetailsPage resource={"/comics"}/>} />
              <Route path="/creators/:id" render={() => <DetailsPage resource={"/creators"}/>} />
              <Route path="/events/:id" render={() => <DetailsPage resource={"/events"}/>} />
              <Route path="/series/:id" render={() => <DetailsPage resource={"/series"}/>} />
              {/* <Route path="/stories/:id" render={() => <DetailsPage resource={"/stories"}/>} /> */}
              <Route path="/characters" render={() => <SearchableCardList resource={"/characters"}/>} />
              <Route path="/comics" render={() => <SearchableCardList resource={"/comics"}/>} />
              <Route path="/creators" render={() => <SearchableCardList resource={"/creators"}/>} />
              <Route path="/events" render={() => <SearchableCardList resource={"/events"}/>} />
              <Route path="/series" render={() => <SearchableCardList resource={"/series"}/>} />
              {/* <Route path="/stories" render={() => <SearchableCardList resource={"/stories"}/>} />*/}
            </Switch>
            <br/>
            <Footer/>
          </Background>
        </div>
      </MuiThemeProvider>
    </Router>
  );
}

export default App;
