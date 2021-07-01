import React, { Component } from 'react';
import '../App.css';

class StatePrac extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      msg: 'Hello Component!',
    };

    setInterval(() => {
      this.setState({
        count: this.state.count + 1,
        msg: `[count: ${this.state.count}]`,
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <div className="container">
          <p className="subtitle">Show Message .</p>
          <p className="alert alert-warning">{this.state.msg}</p>
          <p className="alert alert-dark">{this.props.msg}</p>
        </div>
      </div>
    );
  }
}
export default StatePrac;
