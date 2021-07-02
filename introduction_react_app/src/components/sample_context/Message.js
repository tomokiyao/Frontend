import React, { Component } from 'react';
import '../../App.css';

import SampleContext from './context';

class Message extends Component {
  static contextType = SampleContext;

  render() {
    return (
      <div className="alert alert-primary">
        <h2>{this.context.message}</h2>
      </div>
    );
  }
}

export default Message;
