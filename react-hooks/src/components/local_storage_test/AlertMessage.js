import React, { useState } from 'react';
import '../../App.css';
import { usePersist } from './hooks';

const AlertMessage = () => {
  const [mydata, setMyData] = usePersist('mydata', null);
  const [name, setName] = useState(mydata?.name || '');
  const [mail, setMail] = useState(mydata?.mail || '');
  const [age, setAge] = useState(mydata?.age || 0);

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeMail = (e) => {
    setMail(e.target.value);
  };
  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };
  const onAction = (e) => {
    const data = {
      name: name,
      mail: mail,
      age: age,
    };
    setMyData(data);
  };

  return (
    <div className="alert alert-primary h5 text-primary">
      <h5 className="mb-4">{JSON.stringify(mydata)}</h5>
      <div className="form-group">
        <label className="h6">Name</label>
        <input
          type="text"
          onChange={handleChangeName}
          className="form-control"
          value={name}
        />
        <label className="h6">Mail</label>
        <input
          type="text"
          onChange={handleChangeMail}
          className="form-control"
          value={mail}
        />
        <label className="h6">Age</label>
        <input
          type="number"
          onChange={handleChangeAge}
          className="form-control"
          value={age}
        />
        <button onClick={onAction} className="btn btn-primary">
          Save it !
        </button>
      </div>
    </div>
  );
};

export default AlertMessage;
