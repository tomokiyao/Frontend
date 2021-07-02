import React, { useState } from 'react';
import '../../App.css';

import AlertMessage from './AlertMessage';
import CardMessage from './CardMessage';
import AlertMessage2 from './AlertMessage2';
import CardMessage2 from './CardMessage2';

const BidirectionalState = () => {
  const [msg, setMsg] = useState('This is sample message!');
  const [alert, setAlert] = useState('This is alert message!');
  const [card, setCard] = useState('this is card message!');

  const doAction = () => {
    const res = window.prompt('type your name .');
    setMsg(`Hello ${res}`);
  };

  return (
    <div>
      <div className="container">
        <h4 className="my-3">Bidirectional state sample</h4>
        <AlertMessage msg={msg} />
        <CardMessage msg={msg} />
        <div className="text-center">
          <button onClick={doAction} className="btn btn-primary">
            Click me .
          </button>
        </div>
        <AlertMessage2 alert={alert} setAlert={setAlert} />
        <CardMessage2 card={card} setCard={setCard} />
      </div>
    </div>
  );
};

export default BidirectionalState;
