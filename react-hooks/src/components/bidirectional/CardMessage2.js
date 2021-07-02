import React, { useState } from 'react';
import '../../App.css';

const CardMessage2 = ({ card, setCard }) => {
  const [count, setCount] = useState(0);

  const actionCard = () => {
    setCount(count + 1);
    setCard(`card counter: ${count + 1} count .`);
  };
  return (
    <div className="card p-3 h5 border-primary text-center">
      <h5>{card}</h5>
      <button onClick={actionCard} className="btn btn-primary">
        Click me .
      </button>
    </div>
  );
};

export default CardMessage2;
