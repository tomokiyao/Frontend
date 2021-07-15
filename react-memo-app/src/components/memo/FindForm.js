import React, { useState } from 'react';

const FindForm = ({ setMode, memo, setFMemo }) => {
  const [message, setMessage] = useState('');

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
    e.preventDefault();
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
