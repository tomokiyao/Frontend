import React from 'react';
import '../../App.css';

import { useCalc } from './hooks';

const PlainMessage = () => {
  const [msg, setCalc] = useCalc();

  const handleChange = (e) => {
    setCalc(e.target.value);
  };

  return (
    <div className="p-3 h5">
      <h5>{msg}</h5>
      <input type="number" onChange={handleChange} className="form-control" />
    </div>
  );
};

export default PlainMessage;
