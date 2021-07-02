import React, { useState } from 'react';
import '../App.css';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  const handleClick = () => {
    setCount(count + 1);
  };

  const handleChange = (e) => {
    setFlag(e.target.checked);
  };

  return (
    <div>
      <div className="container">
        <h4 className="my-3">Hooks Counter sample</h4>
        {flag ? (
          <div className="alert p-3 alert-primary text-center">
            <p className="h5 mb-3">click: {count} times .</p>
            <div>
              <button className="btn btn-primary" onClick={handleClick}>
                Click Me !
              </button>
            </div>
          </div>
        ) : (
          <div className="card p-3 border-primary text-center">
            <p className="h5 mb-3 text-left text-primary">
              click: {count} times .
            </p>
            <div>
              <button className="btn btn-primary" onClick={handleClick}>
                Click Me !
              </button>
            </div>
          </div>
        )}
        <div className="form-group h6 text-center pt-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="check1"
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="check1">
            Change form style .
          </label>
        </div>
      </div>
    </div>
  );
};

export default Counter;
