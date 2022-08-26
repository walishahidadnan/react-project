import React, { useState } from 'react';

const UseStateObject = () => {
  const [people, setPeople] = useState({
    name: 'shahid',
    age: 17,
    meassage: 'hello devs'
  })

  const Change = () => {
    setPeople({...people, meassage: "goodnight devs"})
  }
  return(
    <>
      <h3>{people.name}</h3>
      <h3>{people.age}</h3>
      <h4>{people.meassage}</h4>
      <button onClick={Change}>Change</button>
    </>
  );
};

export default UseStateObject;
