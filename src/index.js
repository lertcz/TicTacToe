import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Router from './pages/Router';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from "react-router-dom";

import PeerProvider from "./pages/PeerInfo/PeerInfo";


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter> {/* <HashRouter basename="/TicTacToe"> */}
      <PeerProvider>
          <Router />
      </PeerProvider>
    </BrowserRouter>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
