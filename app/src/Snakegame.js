import React, { useEffect, useState } from 'react';

const initialSnake = [{ x: 5, y: 5 }];
const initialFood = { x: 2, y: 2 };

const Snakegame = () => {
  // Creating a 2D matrix
  const boxdata = new Array(10).fill(null).map(() => new Array(10).fill(""));
  const [box, setbox] = useState(boxdata);
  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState(initialFood);
  const [direction, setDirection] = useState({ x: 0, y: -1 });
  const [gameOver, setGameOver] = useState(false);


  console.log(snake)

  useEffect(() => {
    if (gameOver) return;

    const it = setTimeout(() => {
      handleMoveSnake();
    }, 300);
    return () => clearTimeout(it);
  }, [snake, direction, gameOver]);

  useEffect(() => {
    const handleKey = (e) => {
      switch (e.key) {
        case "ArrowUp":
          if (direction.y !== 1) { // Ensure snake cannot go directly from down to up
            setDirection({ x: 0, y: -1 });
          }
          break;
        case "ArrowDown":
          if (direction.y !== -1) { // Ensure snake cannot go directly from up to down
            setDirection({ x: 0, y: 1 });
          }
          break;
        case "ArrowLeft":
          if (direction.x !== 1) { // Ensure snake cannot go directly from right to left
            setDirection({ x: -1, y: 0 });
          }
          break;
        case "ArrowRight":
          if (direction.x !== -1) { // Ensure snake cannot go directly from left to right
            setDirection({ x: 1, y: 0 });
          }
          break;
        default:
          break;
      }
    };
    window.addEventListener('keydown', handleKey);
    return () => {
      window.removeEventListener('keydown', handleKey);
    };
  }, [direction]); // Dependency on direction to track current direction

  const handleMoveSnake = () => {
    const head = snake[snake.length - 1];
    const newHead = { x: head.x + direction.x, y: head.y + direction.y };

    // Check for collision with wall or self
    if (
      newHead.x < 0 || newHead.x >= 10 || newHead.y < 0 || newHead.y >= 10 ||
      snake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)
    ) {
      setGameOver(true);
      return;
    }

    const newSnake = [...snake, newHead];

    // Check if snake eats food
    if (food.x === newHead.x && food.y === newHead.y) {
      // Trigger voice when food is eaten
      speak("Yum! Food eaten!");
      
      setFood({
        x: Math.floor(Math.random() * 10),
        y: Math.floor(Math.random() * 10),
      });
    } else {
      newSnake.shift(); // Remove the last tail segment if no food is eaten
    }

    setSnake(newSnake);
  };

  // Function to make the browser speak
  const speak = (text) => {
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'en-US'; // Set language to English
    window.speechSynthesis.speak(utterance);
  };

  const handlerestart = () => {
    setSnake(initialSnake);
    setFood(initialFood);
    setDirection({ x: 0, y: -1 });
    setGameOver(false);
  };

  return (
    <div>
      <div>Snake Game</div>

      <div>
        {box.map((row, rowIndex) => (
          <div key={rowIndex} style={{ display: 'flex' }}>
            {row.map((col, colIndex) => {
              const isSnake = snake.some((seg) => seg.x === colIndex && seg.y === rowIndex);
              const isFood = food.x === colIndex && food.y === rowIndex;

              return (
                <div
                  key={colIndex}
                  style={{
                    height: '20px',
                    width: '20px',
                    border: '1px solid black',
                    backgroundColor: isSnake ? 'red' : (isFood ? 'yellow' : 'green'),
                  }}
                />
              );
            })}
          </div>
        ))}
      </div>
      
      {gameOver && <div>Game Over</div>}

      <div>
        {gameOver && <button onClick={handlerestart}>Restart</button>}
      </div>
    </div>
  );
};

export default Snakegame;
