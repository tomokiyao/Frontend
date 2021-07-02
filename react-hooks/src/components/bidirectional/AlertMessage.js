import React from 'react';
import '../../App.css';

const AlertMessage = ({ msg }) => {
  return <div className="alert h5 alert-primary text-center">{msg}</div>;
};

export default AlertMessage;
