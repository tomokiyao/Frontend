import React from 'react';

const Item = ({ value, index }) => {
  const th = {
    width: '100px',
  };
  const td = {
    textAlign: 'right',
    width: '150px',
  };
  let d = new Date(Date.parse(value.created));
  let f = `${d.getMonth()}/${d.getDate()} ${d.getHours()}:${d.getMinutes()}`;

  return (
    <tr>
      <th style={th}>No. {index}</th>
      <td>{value.message}</td>
      <td style={td}>{f}</td>
    </tr>
  );
};

export default Item;
