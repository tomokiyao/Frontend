import React from 'react';

function Message(props) {
  const li = {
    fontSize: '14pt',
    fontWeight: 'bold',
    color: '#858585',
  };
  const arr = props.children.split('。');
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].trim() != '') {
      arr2.push(arr[i]);
    }
  }

  return (
    <div>
      <div className="container">
        <p className="subtitle">{props.title}</p>
        <ol className="list-group">
          {arr2.map((value, key) => (
            <li className="list-group-item" style={li} key={key}>
              {key + 1}. {value}.
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default Message;
