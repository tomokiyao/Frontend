import React, { useState } from 'react';
import '../../App.css';

import AlertMessage from './AlertMessage';

const Form = () => {
  const [name, setName] = useState('');
  const [mail, setMail] = useState('');
  const [age, setAge] = useState(0);
  const [form, setForm] = useState({
    name: 'no name',
    mail: 'no mail',
    age: 0,
  });

  const handleChangeName = (e) => {
    setName(e.target.value);
  };
  const handleChangeMail = (e) => {
    setMail(e.target.value);
  };
  const handleChangeAge = (e) => {
    setAge(e.target.value);
  };
  const handleSubmit = (e) => {
    setForm({ name: name, mail: mail, age: age });
    e.preventDefault();
  };

  return (
    <div>
      <div className="container">
        <h4 className="my-3">Hooks Form sample</h4>
        <AlertMessage data={form} />
        <form onSubmit={handleSubmit}>
          <div className="form-group mt-2">
            <label>Name:</label>
            <input
              type="text"
              className="form-control"
              onChange={handleChangeName}
            />
          </div>
          <div className="form-group mt-2">
            <label>Mail:</label>
            <input
              type="text"
              className="form-control"
              onChange={handleChangeMail}
            />
          </div>
          <div className="form-group mt-2">
            <label>Age:</label>
            <input
              type="number"
              className="form-control"
              onChange={handleChangeAge}
            />
          </div>
          <div className="form-group mt-2">
            <input type="submit" className="btn btn-primary" value="Submit!" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
