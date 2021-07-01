import React, { Component } from 'react';
import '../../App.css';

import List from './List';

class SampleList extends Component {
  data = [
    'This is list sample .',
    'これはリストのサンプルです。',
    '配列をリストに変換します。',
  ];

  render() {
    return (
      <div>
        <div className="container">
          <p className="subtitle">Show list .</p>
          <List title="サンプル・リスト" data={this.data} />
        </div>
      </div>
    );
  }
}

export default SampleList;
