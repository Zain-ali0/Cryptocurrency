import React from "react";
import ReactDom from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import 'antd/dist/antd.css';
import App from "./App";
import store from './App/store';

ReactDom.render(
    <Router>
        <Provider store={store}>
        <App/>
        </Provider>
    </Router>,
    document.getElementById('root')
)