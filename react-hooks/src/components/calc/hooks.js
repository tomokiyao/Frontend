import React, { useState } from 'react';

export const useCalc = (
  func = (a) => {
    return a;
  }
) => {
  const [msg, setMsg] = useState('please type message .');

  const setValue = (p) => {
    let res = func(p);
    setMsg(
      <p className="h5">
        {p}の結果は、{res}です。
      </p>
    );
  };

  return [msg, setValue];
};
