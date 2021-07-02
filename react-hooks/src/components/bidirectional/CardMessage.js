import React from 'react';
import '../../App.css';

const CardMessage = ({ msg }) => {
  return <div className="card p-3 h5 border-primary text-center">{msg}</div>;
};

export default CardMessage;
