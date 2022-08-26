import React, { useState } from 'react';
// use
// component name must be uppercase
// must be in the function/component body
// cannot call conditionally

const UseStateBasics = () => {
  const [title, setTitle] = useState('Random Title')

  const handleClick = () => {
    
    if(title === 'Random Title'){
      setTitle('hello World')
    } else {
      setTitle('Random Title')
    }
  }

  return (
  <>
    <h2>{title}</h2>
    <button className='btn' type="button" onClick={handleClick}>Change title</button>
  </>
  );
};

export default UseStateBasics;
