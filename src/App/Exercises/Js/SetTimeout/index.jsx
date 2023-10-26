import { useEffect, useState } from 'react';

export const SetTimeout = () => {
  const [value, setValue] = useState(0);
  const [counter, setCounter] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);
  const [intervalId, setIntervalId] = useState(null);
  const [message, setMessage] = useState('');
  const handleOnClick = () => {
    clearTimeout(timeoutId);
    const id = setTimeout(() => setValue((prevValue) => prevValue + 1), 2000);
    setTimeoutId(id);
  };

  useEffect(() => {
    console.log('wykonano useEffect', value);
  }, [value]);

  useEffect(() => {
    /// ...
    return () => {
      clearInterval(intervalId);
    };
  }, [intervalId]);

  useEffect(() => {
    /// ...
    return () => {
      clearTimeout(timeoutId);
    };
  }, [timeoutId]);

  useEffect(() => {
    const id = setTimeout(() => setMessage('Hello!!!'), 3000);
    return () => clearTimeout(id);
  }, []);

  const handleCounter = () => {
    // if (intervalId) return;
    clearInterval(intervalId); // 2 sposób wyłączenia 'przyspieszania'
    const id = setInterval(
      () => setCounter((prevValue) => prevValue + 1),
      1000
    );
    setIntervalId(id);
  };

  const handleStopCounter = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };

  return (
    <div>
      <h1>useEffect, setTimeout, setInterval</h1>
      <div>Value = {value}</div>
      <div>Counter = {counter}</div>
      <br />
      <button style={{ padding: '1rem' }} type="button" onClick={handleOnClick}>
        +
      </button>
      <button onClick={handleCounter}>Counter</button>
      <button onClick={handleStopCounter}>Stop Counter</button>
      <div>{message}</div>
    </div>
  );
};