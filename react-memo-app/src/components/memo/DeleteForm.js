import React, { useState } from 'react';

const DeleteForm = ({ memo, setMemo }) => {
  const [num, setNum] = useState(0);

  const handleChangeNum = (e) => {
    setNum(e.target.value);
  };

  const doAction = (e) => {
    let res = memo.filter((_item, key) => {
      return key !== num;
    });
    setMemo(res);
    setNum(0);
    e.preventDefault();
  };

  let items = memo.map((value, key) => (
    <option key={key} value={key}>
      {value.message.substring(0, 10)}
    </option>
  ));

  return (
    <form onSubmit={doAction}>
      <div className="form-group row">
        <select
          onChange={handleChangeNum}
          className="form-control-sm col"
          defaultValue="-1"
        >
          {items}
        </select>
        <input
          type="submit"
          value="Delete"
          className="btn btn-primary btn-sm col-2"
        />
      </div>
    </form>
  );
};

export default DeleteForm;
