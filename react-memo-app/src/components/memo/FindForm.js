import React, { useState } from 'react';
import { usePersist } from '../../hooks';

const FindForm = () => {
  const [memo] = usePersist('memo', []);
  const [, setFMemo] = usePersist('findMemo', []);
  const [message, setMessage] = useState('');
  const [, setMode] = usePersist('mode', 'find');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const doAction = (e) => {
    if (message === '') {
      setMode('default');
      return;
    }
    let res = memo.filter((item, _key) => {
      return item.message.includes(message);
    });
    setFMemo(res);
    setMode('find');
  };

  return (
    <form onSubmit={doAction}>
      <div className="form-group row">
        <input
          type="text"
          value={message}
          onChange={handleChange}
          className="form-control-sm col"
        />
        <input
          type="submit"
          value="Find"
          className="btn btn-primary btn-sm col-2"
        />
      </div>
    </form>
  );
};

export default FindForm;
