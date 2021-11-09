import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import Game from './pages/Game/Game'
import Router from './pages/Router';
//import TitleScreen from './pages/TitleScreen/TitleScreen';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";


ReactDOM.render(
  <React.StrictMode>
      <BrowserRouter> {/* <HashRouter basename="/TicTacToe"> */}
          <Router />
      </BrowserRouter>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
