import React from 'react';

function Rect({ x, y, r, width, height, color }) {
  const style = {
    backgroundColor: color,
    position: 'absolute',
    left: `${x}px`,
    top: `${y}px`,
    width: `${width}px`,
    height: `${height}px`,
    borderRadius: `${r}px`,
  };
  return <div style={style}></div>;
}

Rect.defaultProps = {
  x: 0,
  y: 0,
  r: 0,
  width: 0,
  height: 0,
  color: 'white',
};

export default Rect;
