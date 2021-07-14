import React from 'react';
import '../../App.css';
import AlertMessage from './AlertMessage';

const App = () => {
  return (
    <div>
      <div className="container">
        <h4 className="my-3">localStorage sample</h4>
        <AlertMessage />
      </div>
    </div>
  );
};

export default App;
