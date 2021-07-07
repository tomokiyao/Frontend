import React from 'react';
import '../../App.css';

const AlertMessage = ({ msg }) => {
  return (
    <div className="alert alert-primary h5 text-primary">
      <h5>{msg}</h5>
    </div>
  );
};

export default AlertMessage;
