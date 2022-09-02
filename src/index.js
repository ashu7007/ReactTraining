import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
import form from './index.css';
import store from './app/store'
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';

import RegisterComponent from './components/RegisterComponent/registerFormRedux'

const root = ReactDOM.createRoot(document.getElementById('root'));

const listItem= [];
root.render(
  <React.StrictMode>
    <Provider>
    <RegisterComponent store={store}></RegisterComponent>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
