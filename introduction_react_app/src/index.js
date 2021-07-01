import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './App';
import Rect from './components/Rect';
import StatePrac from './components/StatePrac';
import ClickCountUp from './components/ClickCountUp';
import Draw from './components/Draw';
import SampleList from './components/sample/SampleList';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <App message="This is App Component!" title="App" />
    <StatePrac msg="This is App Component!" />
    <ClickCountUp />
    <Draw />
    <SampleList />
    <Rect x="200" y="1300" width="200" height="200" color="#6ff9" r="25" />
    <Rect x="300" y="1400" width="200" height="200" color="#f6f9" r="75" />
    <Rect x="400" y="1500" width="200" height="200" color="#6669" r="100" />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
