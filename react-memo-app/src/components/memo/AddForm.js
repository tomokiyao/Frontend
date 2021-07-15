import React, { useState } from 'react';

const AddForm = ({ memo, setMemo }) => {
  const [message, setMessage] = useState('');

  const handleChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const doAction = (e) => {
    const data = {
      message: message,
      created: new Date(),
    };
    let res = [data, ...memo];
    setMemo(res);
    setMessage('');
    e.preventDefault();
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
