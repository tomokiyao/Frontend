import React from 'react';
import '../../App.css';

const AlertMessage = ({ data }) => {
  return (
    <div className="alert alert-primary h5 text-primary">
      <table className="table h6">
        <tbody>
          <tr>
            <th>Name</th>
            <td>{data.name}</td>
          </tr>
          <tr>
            <th>Mail</th>
            <td>{data.mail}</td>
          </tr>
          <tr>
            <th>age</th>
            <td>{data.age}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default AlertMessage;
