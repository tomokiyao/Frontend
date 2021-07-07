import React from 'react';
import '../../App.css';

import { useCalc } from './hooks';

const CardMessage = () => {
  const tax = (a) => {
    return Math.floor(a * 1.1);
  };

  const [msg, setCalc] = useCalc(tax);

  const handleChange = (e) => {
    setCalc(e.target.value);
  };

  return (
    <div className="card p-3 h5 border-primary">
      <h5>{msg}</h5>
      <input
        type="range"
        onChange={handleChange}
        min="0"
        max="100000"
        step="100"
        className="form-control"
      />
    </div>
  );
};

export default CardMessage;
