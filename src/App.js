import React, { Component } from "react";
import _ from "lodash";
import { Switch, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Movies from "./components/pages/Movies";
import {
  Container
} from "semantic-ui-react";
import Header from './components/Header';
import Footer from "./components/Footer";

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
        
        <Header/>

        <Container text>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/movies" component={Movies} />
          </Switch>
        </Container>
        <Footer/>
      </div>
    );
  }
}

export default App;
