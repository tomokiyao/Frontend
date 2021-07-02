import React from 'react';
import '../../App.css';

import Title from './Title';
import Message from './Message';
import SampleContext from './context';

function ContextApp() {
  const newData = {
    title: '新しいタイトル',
    message: '新しいメッセージです！',
  };
  return (
    <div className="container">
      <Title />
      <Message />
      <hr />
      <SampleContext.Provider value={newData}>
        <Title />
        <Message />
      </SampleContext.Provider>
      <hr />
      <Title />
      <Message />
    </div>
  );
}

export default ContextApp;
