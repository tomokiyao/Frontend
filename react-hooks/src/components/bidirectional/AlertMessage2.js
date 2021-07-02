import React from 'react';
import '../../App.css';

const AlertMessage2 = ({ alert, setAlert }) => {
  const data = ['Hello', 'Welcome...', 'Good-bye...'];
  const actionAlert = () => {
    const re = data[Math.floor(Math.random() * data.length)];
    setAlert(`message ${re}`);
  };
  return (
    <div className="alert h5 mt-3 alert-primary text-center">
      <h5>{alert}</h5>
      <button onClick={actionAlert} className="btn btn-primary">
        Click me .
      </button>
    </div>
  );
};

export default AlertMessage2;
