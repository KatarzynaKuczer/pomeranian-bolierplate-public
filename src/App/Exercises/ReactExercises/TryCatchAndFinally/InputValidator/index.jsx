import { ErrorOutline } from '@mui/icons-material';
import { useState } from 'react';

// Treść zadania:

// 1.dodać input

// 2.dodać metodę validate z jednym parametrem

// 3.w metodzie validate sprawdzić czy podany parametr jest intem jeśli nie wyrzucić wyjątek

// 4. dodać w metodzie onChange inputa wywołanie metody validate z wartością inputa.

// 5. zobaczyć jaki będzie wynik wpisania czegoś co jest i co nie jest liczbą

export function NumberInputValidator() {
  const [getInputValue, setInputValue] = useState('');
  const [getErrorMessage, setErrorMessage] = useState('');

  const validate = (value) => {
    try {
      // konwertuję na liczbę całkowitą przy pomocy parseInt
      const intValue = parseInt(value, 10);
      // jeżeli liczba nie jest numberem/integerem
      if (isNaN(intValue)) {
        throw new Error('Wprowadzona wartość nie jest liczbą całkowitą');
      }
      setErrorMessage('');
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  const handleInputValidate = (event) => {
    const inputValue = event.target.value;
    setInputValue(inputValue);
    validate(inputValue);
  };

  return (
    <div className="container--number-input-validator">
      <input
        type="text"
        placeholder="Wprowadź literę"
        value={getInputValue}
        onChange={handleInputValidate}
      />
      <p>Error: {getErrorMessage && getErrorMessage}</p>
    </div>
  );
}
