import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import store from "./store/"
import {Provider} from "react-redux"
import './static/style/iconfont/iconfont.css'
import './static/js/flexible'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  
    <App></App>,
  
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
