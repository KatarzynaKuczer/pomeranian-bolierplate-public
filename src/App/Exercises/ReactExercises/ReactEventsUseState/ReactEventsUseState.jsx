import { useState } from 'react';

export function ReactEventsUseState() {
  const test = 'test';
  const [count, setCount] = useState(0);
  const [inputValue, setInputValue] = useState('Placeholder');

  const handleClick = (event) => {
    setInputValue('Placeholder');
  };

  const handleChange = (e) => {
    console.log(e.target.value);
    setInputValue(e.target.value);
  };

  const handleCountClick = () => {
    setCount(count + 1);
  };

  return (
    <div>
      <div>Test zmienna: {test}</div>
      <div> useState count: {count}</div>
      <button onClick={handleCountClick}>Zwiększ o jeden</button>

      <h1>Cześć!</h1>
      <p>Wpisz tekst</p>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button onClick={handleClick}>Reset</button>

      <p>{inputValue} - tutaj będzie wpisany nasz tekst</p>
    </div>
  );
}
