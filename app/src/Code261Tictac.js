import React, { useState, useEffect } from 'react';

const Code261Tictac = () => {
  const [tic, settic] = useState(Array(3).fill(null).map(() => Array(3).fill(null)));
  const [playerstatus, setplayerstatus] = useState('first');
  const [win, setwin] = useState('');

  const handleaddNumber = (row, column) => {
    if (tic[row][column] || win) return; // Prevent overwriting and disable clicks after a win
    const newTic = tic.map((r, rIndex) =>
      r.map((cell, cIndex) => (rIndex === row && cIndex === column ? (playerstatus === 'first' ? 1 : 2) : cell))
    );
    settic(newTic);
    setplayerstatus((prev) => (prev === 'first' ? 'second' : 'first'));
  };

  useEffect(() => {
    const checkWinner = () => {
      for (let i = 0; i < 3; i++) {
        // Check rows
        if (tic[i][0] && tic[i][0] === tic[i][1] && tic[i][1] === tic[i][2]) return tic[i][0];
        // Check columns
        if (tic[0][i] && tic[0][i] === tic[1][i] && tic[1][i] === tic[2][i]) return tic[0][i];
      }
      // Check diagonals
      if (tic[0][0] && tic[0][0] === tic[1][1] && tic[1][1] === tic[2][2]) return tic[0][0];
      if (tic[0][2] && tic[0][2] === tic[1][1] && tic[1][1] === tic[2][0]) return tic[0][2];
      return null;
    };

    const winner = checkWinner();
    if (winner) {
      setwin(winner === 1 ? 'Player 1 (X)' : 'Player 2 (O)');
    }
  }, [tic]);

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      {win ? <h2>Winner: {win}</h2> : <h2>Current Turn: {playerstatus === 'first' ? 'Player 1 (X)' : 'Player 2 (O)'}</h2>}
      <div>
        {tic.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex', justifyContent: 'center' }}>
            {row.map((cell, cellIndex) => (
              <div
                key={cellIndex}
                style={{
                  border: '1px solid black',
                  height: '50px',
                  width: '50px',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  fontSize: '24px',
                  backgroundColor: cell ? (cell === 1 ? 'lightblue' : 'lightpink') : 'white',
                }}
                onClick={() => handleaddNumber(rowIndex, cellIndex)}
              >
                {cell === 1 ? 'X' : cell === 2 ? 'O' : ''}
              </div>
            ))}
          </div>
        ))}
      </div>
      {win && <button onClick={() => window.location.reload()}>Restart Game</button>}
    </div>
  );
};

export default Code261Tictac;
