import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router-dom';
import {createStore} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import browserHistory from "./history";
import reducer from './store/root-reducer';
import App from "./components/app/app";
import {setOnClickBlur} from "./utils/set-on-click-blur";

import './assets/styles/normalize.css';
import './assets/styles/custom-icon-font.css';
import './assets/styles/style.scss';

const store = createStore(reducer, composeWithDevTools());

setOnClickBlur();

ReactDOM.render(
    <Provider store={store}>
      <Router history={browserHistory}>
        <App/>
      </Router>
    </Provider>,
    document.querySelector(`#root`)
);
