import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './App';
import Counter from './components/Counter';
import BidirectionalState from './components/bidirectional/BidirectionalState';
import Form from './components/form/Form';
import SideEffect from './components/side_effect/SideEffect';
import OriginalHook from './components/original_hook/OriginalHook';
import Calc from './components/calc/App';

import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Counter />
    <BidirectionalState />
    <Form />
    <SideEffect />
    <OriginalHook />
    <Calc />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
