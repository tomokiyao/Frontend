import React from 'react';
import '../../App.css';

import PlainMessage from './PlainMessage';
import AlertMessage from './AlertMessage';
import CardMessage from './CardMessage';

const App = () => {
  return (
    <div>
      <div className="container">
        <h4 className="my-3">Calc sample</h4>
        <PlainMessage />
        <AlertMessage />
        <CardMessage />
      </div>
    </div>
  );
};

export default App;
