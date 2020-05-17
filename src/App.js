import React, { Component } from "react";
import _ from "lodash";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Movies from "./components/pages/Movies";
import { Container } from "semantic-ui-react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NewMovie from "./components/pages/NewMovie";
import MoviesDetail from "./components/pages/MoviesDetail";
import EditMovie from "./components/pages/EditMovie";
import Login from "./components/pages/Login";
import AuthenticatedComponent from "./components/tools/helpers/AuthenticatedComponent";

class App extends Component {
  state = {
    overlayFixed: false,
  };

  handleOverlayRef = (c) => {
    const { overlayRect } = this.state;

    if (!overlayRect) {
      this.setState({
        overlayRect: _.pick(c.getBoundingClientRect(), "height", "width"),
      });
    }
  };

  stickOverlay = () => this.setState({ overlayFixed: true });
  unStickOverlay = () => this.setState({ overlayFixed: false });

  render() {
    return (
      <div>
        <Header />

        <Container text>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <AuthenticatedComponent>
              <Route exact path="/movies" component={Movies} />
              <Route exact path="/movies/new" component={NewMovie} />
              <Route exact path="/movies/:id" component={MoviesDetail} />
              <Route exact path="/movie/edit/:id" component={EditMovie} />
            </AuthenticatedComponent>
          </Switch>
        </Container>
        <Footer />
      </div>
    );
  }
}

export default App;
