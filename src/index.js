import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import {Provider} from 'react-redux';
import {store} from './redux/store/configureStore';
import {BrowserRouter} from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';

ReactDOM.render(<BrowserRouter><Provider store={store}><App /></Provider></BrowserRouter>, document.getElementById("root"));

serviceWorker.unregister();
