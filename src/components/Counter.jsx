import React, { useEffect, useState } from 'react';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  //    getter     setter               initial value

  const [timer, setTimer] = useState(0);

  const increment = () => {
    // setCounter(counter + 1);
    setCounter(prev => prev + 1);
  };
  const decrement = () => {
    // setCounter(counter - 1);
    setCounter(prev => prev - 1);
  };
  const reset = () => {
    setCounter(0);
  };

  useEffect(() => {
    console.log('run useEffect');
    const intervalId = setInterval(() => {
      setTimer(prev => prev + 1);
    }, 1000);
    return () => {
      console.log('run useEffect as componentWillUnmount');
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <h1>Counter</h1>
      <button className="decrement-btn" onClick={decrement}>
        -
      </button>
      <span>{counter}</span>
      <button className="increment-btn" onClick={increment}>
        +
      </button>
      <br />
      <button className="reset-btn" onClick={reset}>
        Reset
      </button>
      <h1>{timer}</h1>
    </div>
  );
};

export default Counter;
