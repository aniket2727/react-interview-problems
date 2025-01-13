


import React, { useState, useEffect } from "react";
import "./SnakeGame.css";

const boardSize = 10; // Smaller board for simplicity
const initialSnake = [{ x: 5, y: 5 }];
const initialFood = { x: 2, y: 2 };

const SnakeGame = () => {
  const [snake, setSnake] = useState(initialSnake);
  const [food, setFood] = useState(initialFood);
  const [direction, setDirection] = useState({ x: 0, y: -1 }); // Moves up initially
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      if (!gameOver) moveSnake();
    }, 300); // Move every 300ms
    return () => clearInterval(timer);
  }, [snake, direction, gameOver]);

  useEffect(() => {
    const handleKey = (e) => {
      switch (e.key) {
        case "ArrowUp":
          setDirection({ x: 0, y: -1 });
          break;
        case "ArrowDown":
          setDirection({ x: 0, y: 1 });
          break;
        case "ArrowLeft":
          setDirection({ x: -1, y: 0 });
          break;
        case "ArrowRight":
          setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    };
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, []);

  const moveSnake = () => {
    const head = snake[snake.length - 1];
    const newHead = { x: head.x + direction.x, y: head.y + direction.y };

    // Check for collisions
    if (
      newHead.x < 0 ||
      newHead.x >= boardSize ||
      newHead.y < 0 ||
      newHead.y >= boardSize ||
      snake.some((segment) => segment.x === newHead.x && segment.y === newHead.y)
    ) {
      setGameOver(true);
      return;
    }

    const newSnake = [...snake, newHead];

    if (newHead.x === food.x && newHead.y === food.y) {
      setFood({
        x: Math.floor(Math.random() * boardSize),
        y: Math.floor(Math.random() * boardSize),
      });
    } else {
      newSnake.shift(); // Remove the tail
    }

    setSnake(newSnake);
  };

  return (
    <div>
      <h1>Simple Snake Game</h1>
      {gameOver ? (
        <h2>Game Over! Refresh to play again.</h2>
      ) : (
        <div className="board">
          {Array.from({ length: boardSize }, (_, row) =>
            Array.from({ length: boardSize }, (_, col) => {
              const isSnake = snake.some((seg) => seg.x === col && seg.y === row);
              const isFood = food.x === col && food.y === row;
              return (
                <div
                  key={`${row}-${col}`}
                  className={`cell ${isSnake ? "snake" : ""} ${
                    isFood ? "food" : ""
                  }`}
                />
              );
            })
          )}
        </div>
      )}
    </div>
  );
};

export default SnakeGame;
