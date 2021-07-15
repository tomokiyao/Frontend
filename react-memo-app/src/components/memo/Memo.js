import React from 'react';
import Item from './Item';

const Memo = ({ memo, fMemo, mode }) => {
  let data = [];

  switch (mode) {
    case 'default':
      data = memo.map((value, key) => (
        <Item key={key} value={value} index={key + 1} />
      ));
      break;

    case 'find':
      data = fMemo.map((value, key) => (
        <Item key={key} value={value} index={key + 1} />
      ));
      break;

    default:
      data = memo.map((value, key) => (
        <Item key={key} value={value} index={key + 1} />
      ));
  }

  return (
    <table className="table mt-4">
      <tbody>{data}</tbody>
    </table>
  );
};

export default Memo;
