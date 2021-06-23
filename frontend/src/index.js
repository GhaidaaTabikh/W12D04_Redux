import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";

//context providers
import RegisterProvider from "./context/register";
import LoginProvider from "./context/login";
import NewArticleProvider from "./context/newArticle";
import DashboardProvider from "./context/dashboard";
import { Provider } from 'react-redux';
import store from './reducers';

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
