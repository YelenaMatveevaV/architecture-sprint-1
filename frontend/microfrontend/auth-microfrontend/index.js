import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Login from './src/Login';
import Register from './src/Register';
// import App from './components/App';
// import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root') // какой из двух компонент должен стать рутом здесь?
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
