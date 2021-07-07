import React, { useState } from 'react';
import '../../App.css';

const useTax = (t1, t2) => {
  const [price, setPrice] = useState(1000);
  const [tx1] = useState(t1);
  const [tx2] = useState(t2);

  const tax1 = () => {
    return Math.floor(price * (1.0 + tx1 / 100));
  };
  const tax2 = () => {
    return Math.floor(price * (1.0 + tx2 / 100));
  };

  return [price, tax1, tax2, setPrice];
};

const AlertMessage = () => {
  const [price, tax1, tax2, setPrice] = useTax(10, 8);

  const handleChange = (e) => {
    setPrice(e.target.value);
  };

  return (
    <div className="alert alert-primary h5 text-primary">
      <p className="h5">通常税率： {tax1()}円</p>
      <p className="h5">軽減税率： {tax2()}円</p>
      <div className="form-group">
        <label className="form-group-label">Price:</label>
        <input
          type="number"
          className="form-control"
          onChange={handleChange}
          value={price}
        />
      </div>
    </div>
  );
};

export default AlertMessage;
