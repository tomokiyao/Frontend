import React from 'react';
import '../../App.css';

import { useCalc } from './hooks';

const AlertMessage = () => {
  const total = (a) => {
    let re = 0;
    for (let i = 0; i <= a; i++) {
      re += i;
    }
    return re;
  };

  const [msg, setCalc] = useCalc(total);

  const handleChange = (e) => {
    setCalc(e.target.value);
  };

  return (
    <div className="alert alert-primary h5 text-primary">
      <h5>{msg}</h5>
      <input
        type="number"
        onChange={handleChange}
        min="0"
        max="100000"
        className="form-control"
      />
    </div>
  );
};

export default AlertMessage;
