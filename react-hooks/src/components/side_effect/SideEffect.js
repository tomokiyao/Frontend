import React, { useState, useEffect } from 'react';
import '../../App.css';

import AlertMessage from './AlertMessage';

const SideEffect = () => {
  const [val, serVal] = useState(1000);
  const [tax1, setTax1] = useState(0);
  const [tax2, setTax2] = useState(0);
  const [msg, setMsg] = useState(<p>set a price .</p>);

  const handleChange = (e) => {
    serVal(e.target.value);
  };

  useEffect(() => {
    let res = (
      <div>
        <p>軽減税率（8%）: {tax1}</p>
        <p>軽減税率（10%）: {tax2}</p>
      </div>
    );
    setMsg(res);
  }, [tax1, tax2]);

  useEffect(() => {
    setTax1(Math.floor(val * 1.08));
  }, [val]);

  useEffect(() => {
    setTax2(Math.floor(val * 1.1));
  }, [val]);

  return (
    <div>
      <div className="container">
        <h4 className="my-3">Hooks Effect sample</h4>
        <AlertMessage msg={msg} />
        <div className="form-group">
          <label>Input:</label>
          <input
            type="number"
            className="form-control"
            onChange={handleChange}
            value={val}
          />
        </div>
      </div>
    </div>
  );
};

export default SideEffect;
