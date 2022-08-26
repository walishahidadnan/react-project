import React, { useState } from 'react';

const UseStateCounter = () => {
  const [value, setValue] = useState(0);

  const complexIncre = () => {
    setTimeout(()=> {
      // setValue(value + 1)
      setValue((prevState)=>{
        return prevState + 1
      })
    }, 2000)
  }

  return (
    <>
      <section style={{margin: '4rem 0'}}>
        <h2>Regular Counter</h2>
        <h1>{value}</h1>
        <button onClick={() => setValue(value - 1)} className='btn'>decrease</button>
        <button onClick={() => setValue(value + 1)} className='btn'>increase</button>
        <button onClick={() => setValue(0)} className='btn'>reset</button>
      </section>
      <section style={{margin: '4rem 0'}}>
        <h2>More Complex Counter</h2>
        <h1>{value}</h1>
        <button onClick={() => setValue(0)} className='btn'>reset</button>
        <button className='btn' onClick={complexIncre}>increase later</button>
      </section>
    </>
  );
};

export default UseStateCounter;
