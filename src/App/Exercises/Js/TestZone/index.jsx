import './styles.css';
import { MainHeader } from '../../../Components/MainHeader';
import { Button } from '../../../Components/Button';
import { useState } from 'react';
import { Tile } from './Tile';

// ---------------------------------------------------------------------

const MINUTE = 60000;

export const TestZone = () => {
  // notStarted, started, finished
  // useState jest hookiem reaktowym, który musi być wewnątrz funkcji (komponentu reactowego)
  const [status, setStatus] = useState('notStarted');
  const [score, setScore] = useState(0);
  const [duration, setDuration] = useState(0);
  const [timeLeft, setTimeLeft] = useState(0);
  const [resultTime, setResultTime] = useState(0);
  const [molesNo, setMolesNo] = useState(0);

  const handleStartOnClick = () => {
    setStatus('started');
  };

  const handleStopOnClick = () => {
    setStatus('finished');
    setResultTime(duration - timeLeft);
  };

  return (
    <div className="hit-the-mole-game">
      <MainHeader>Kret</MainHeader>
      <p className="mole-description">
        Gra polegająca na podążaniu za krecikiem i trafieniu na kwadrat, w
        którym się pojawił.
      </p>
      <div className="mole-result">
        Gratulacje! Twój wynik to {score} złapane w czasie {resultTime} minut!
      </div>
      <div className="mole-settings-container">
        <span className="mole-label">CZAS GRY</span>
        <Button
          variant={duration !== MINUTE ? 'primary' : 'secondary'}
          onClick={() => setDuration(MINUTE)}
        >
          1 minuta
        </Button>
        <Button
          variant={duration !== 2 * MINUTE ? 'primary' : 'secondary'}
          onClick={() => setDuration(2 * MINUTE)}
        >
          2 minuty
        </Button>
        <Button
          variant={duration !== 3 * MINUTE ? 'primary' : 'secondary'}
          onClick={() => setDuration(3 * MINUTE)}
        >
          3 minuty
        </Button>
      </div>
      <div className="mole-settings-container">
        <span className="mole-label">LICZBA KRETÓW</span>
        <Button
          variant={molesNo !== 1 ? 'primary' : 'secondary'}
          onClick={() => setMolesNo(1)}
        >
          1 kret
        </Button>
        <Button
          variant={molesNo !== 2 ? 'primary' : 'secondary'}
          onClick={() => setMolesNo(2)}
        >
          2 krety
        </Button>
        <Button
          variant={molesNo !== 3 ? 'primary' : 'secondary'}
          onClick={() => setMolesNo(3)}
        >
          3 krety
        </Button>
      </div>
      <div className="mole-settings-container">
        <span className="mole-label">Przyciski sterujące</span>
        <Button onClick={handleStartOnClick} variant="primary">
          start
        </Button>
      </div>

      <div className="mole-settings-container">
        <span className="mole-label">Czas do końca</span>
        <span className="mole-output">1:35</span>
      </div>
      <div className="mole-settings-container">
        <span className="mole-label">Wynik</span>
        <span className="mole-output">1:35</span>
      </div>
      <div className="mole-settings-container">
        <span className="mole-label">Przyciski sterujące</span>
        <Button onClick={handleStopOnClick} variant="tertiary">
          stop
        </Button>
      </div>
      <div>Started: {status}</div>
      <Tile />
    </div>
  );
};
