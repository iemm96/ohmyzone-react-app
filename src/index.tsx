import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import {BrowserRouter} from "react-router-dom";
import Routes from "./routes";

ReactDOM.render(
    <BrowserRouter>
        <React.StrictMode>
            <Routes/>
        </React.StrictMode>,
    </BrowserRouter>,
  document.getElementById('root')
);

