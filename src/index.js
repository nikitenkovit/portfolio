import React from 'react';
import ReactDOM from 'react-dom';
import {Router} from 'react-router-dom';
import browserHistory from "./history";
import App from "./components/app/app";
import {setOnClickBlur} from "./assets/js/set-on-click-blur";

import './assets/styles/normalize.css';
import './assets/styles/custom-icon-font.css';
import './assets/styles/style.scss';

setOnClickBlur();

ReactDOM.render(
    <Router history={browserHistory}>
      <App/>
    </Router>,
    document.querySelector(`#root`)
);
