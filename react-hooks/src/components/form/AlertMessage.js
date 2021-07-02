import React from 'react';
import '../../App.css';

const AlertMessage = ({ data }) => {
  return (
    <div className="alert alert-primary h5 text-primary">
      <table className="table h6">
        <tbody>
          <tr>
            <th>Name</th>
            {data.name}
          </tr>
          <tr>
            <th>Mail</th>
            {data.mail}
          </tr>
          <tr>
            <th>age</th>
            {data.age}
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AlertMessage;
