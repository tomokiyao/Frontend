import React from 'react';
import '../../App.css';

import AlertMessage from './AlertMessage';

const OriginalHook = () => {
  return (
    <div>
      <div className="container">
        <h4 className="my-3">Original Hooks sample</h4>
        <AlertMessage />
      </div>
    </div>
  );
};

export default OriginalHook;
