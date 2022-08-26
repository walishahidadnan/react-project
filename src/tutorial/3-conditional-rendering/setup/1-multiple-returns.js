import React, { useState, useEffect } from 'react';
const url = 'https://api.github.com/users/QuincyLarson';
const MultipleReturns = () => {
  const [isLoading, setIsloading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('defualt user');

  useEffect(()=>{
    fetch(url)
      .then((resp) => {
        if(resp.status >= 200 && resp.status <= 299){
          return resp.json()
        }
        else{
          setIsloading(false)
          setIsError(true)
          throw new Error(resp.statusText)
        }
      })
      .then((user) => {
        const {login} = user;
        setUser(login)
        setIsloading(false)
      })
      .catch((error) => console.log(error))
  }, [])


  if(isLoading){
    return (
      <> 
        <h1>Loading....</h1> 
      </>
    )
  }
  if(isError){
    return (
      <> 
        <h1>Error....</h1> 
      </>
    )
  }
  return (
    <>
      <h2>{user}</h2>
    </>
  );
};

export default MultipleReturns;
