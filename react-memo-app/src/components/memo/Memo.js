import React from 'react';
import { usePersist } from '../../hooks';
import Item from './Item';

const Memo = () => {
  const [memo] = usePersist('memo', []);
  const [fMemo] = usePersist('findMemo', []);
  const [mode, setMode] = usePersist('mode', 'default');

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
      setMode('default');
  }

  return (
    <table className="table mt-4">
      <tbody>{data}</tbody>
    </table>
  );
};

export default Memo;
