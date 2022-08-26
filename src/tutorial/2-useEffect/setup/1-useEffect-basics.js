import React, { useState, useEffect } from 'react';
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {

  const [value, setValue] = useState(0)

  useEffect(() => {
    console.log('call useEffect')
    if(value >= 1){
      document.title = `New Massage(${value})`
    }
  }, [value]);
  console.log('render components');


  return (
    <>
      <h1>{value}</h1>
      <button type='button' className='btn' onClick={() => setValue(value + 1)}>Click Me</button>
    </>
  );
};

export default UseEffectBasics;
