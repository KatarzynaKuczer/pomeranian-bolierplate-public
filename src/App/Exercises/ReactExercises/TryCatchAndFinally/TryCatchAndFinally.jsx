import { useEffect, useState } from 'react';
import './styles.css';
import { NumberInputValidator } from './InputValidator';

export function TryCatchAndFinally() {
  // useState hook
  const [getUserData, setUserData] = useState(null);
  const [getError, setError] = useState(null);

  // synthatic sugar async - pytanie rekrutacyjne
  const fetchData = async () => {
    try {
      // synthatic sugar await
      // restfull API
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/users/1'
      );

      const data = await response.json();
      setUserData(data);
    } catch (error) {
      // exception - słowo klucz (wyjątek)
      // throw new Error("Ups kodzik się położył")
      setError(error);
    } finally {
      console.log('Wykonam się niezależnie czy API się położy czy nie');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="try-catch-and-finally-container">
      Name: {getUserData?.name}
      Username: {getUserData?.username}
      {getError && getError.message}
      <br />
      <br />
      <br />
      <br />
      <NumberInputValidator />
    </div>
  );
}
