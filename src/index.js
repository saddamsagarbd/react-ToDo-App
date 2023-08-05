import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import "bootstrap/dist/css/bootstrap.min.css";

const div = document.getElementById('root');
const root = ReactDOM.createRoot(div);
root.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>
);
/*
    <App /> did two things
    1. Create an object of class App
    2. Call render method of App class. render method return a JSX element. This JSX element converted into JavaScript by Babel like <h3> Saddam Hossain </h3> to React.createElement('h3', null, "Saddam Hossain"). To use React we import React from 'react' library.

*/
