import React, { useState } from 'react';
import { usePersist } from '../../hooks';

const AddForm = () => {
  const [memo, setMemo] = usePersist('memo', []);
  const [message, setMessage] = useState('');

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const doAction = () => {
    const data = {
      message: message,
      created: new Date(),
    };
    memo.unshift(data);
    setMemo(memo);
    setMessage('');
  };

  return (
    <form onSubmit={doAction} action="">
      <div className="form-group row">
        <input
          type="text"
          className="form-control-sm col"
          onChange={handleChangeMessage}
          value={message}
          required
        />
        <input
          type="submit"
          value="Add"
          className="btn btn-primary btn-sm col-2"
        />
      </div>
    </form>
  );
};

export default AddForm;
