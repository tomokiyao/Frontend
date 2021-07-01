import React, { Component } from 'react';
import '../App.css';

class Draw extends Component {
  data = [];

  area = {
    width: '300px',
    height: '300px',
    border: '1px solid blue',
    margin: '0 auto',
  };

  constructor(props) {
    super(props);
    this.state = {
      list: this.data,
    };

    this.doAction = this.doAction.bind(this);
  }

  doAction(e) {
    const x = e.pageX;
    const y = e.pageY;
    this.data.push({ x: x, y: y });
    this.setState({
      list: this.data,
    });
  }

  draw(d, i) {
    const s = {
      position: 'absolute',
      left: `${d.x - 25}px`,
      top: `${d.y - 25}px`,
      width: '50px',
      height: '50px',
      backgroundColor: '#66f3',
    };
    return <div key={i} style={s}></div>;
  }

  render() {
    return (
      <div>
        <div className="container">
          <p className="subtitle">Draw rectangle .</p>
          <div style={this.area} onClick={this.doAction}>
            {this.data.map((value, index) => this.draw(value, index))}
          </div>
        </div>
      </div>
    );
  }
}
export default Draw;
