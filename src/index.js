import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

import { Routes } from "./routes/Routes";

import { createBrowserHistory } from "history";

const history = createBrowserHistory();

ReactDOM.render(
<<<<<<< HEAD
  <Router history={history}>
    <Routes />
  </Router>,
  document.getElementById("root")
=======
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
>>>>>>> dev
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
