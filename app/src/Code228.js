




import React, { useState } from "react";

const TicTacToe = () => {
    const [board, setBoard] = useState(Array(9).fill(null)); // Board with 9 cells
    const [isXNext, setIsXNext] = useState(true); // Toggle between X and O

    const handleClick = (index) => {
        // If the cell is already filled or there is a winner, return early
        if (board[index] || calculateWinner(board)) return;

        const newBoard = board.slice(); // Create a copy of the board
        newBoard[index] = isXNext ? "X" : "O"; // Set the cell to X or O
        setBoard(newBoard); // Update the board state
        setIsXNext(!isXNext); // Toggle the turn
    };

    const resetGame = () => {
        setBoard(Array(9).fill(null)); // Reset the board
        setIsXNext(true); // Start with X
    };

    const winner = calculateWinner(board); // Check for a winner
    const status = winner
        ? `Winner: ${winner}`
        : board.every((cell) => cell) // If all cells are filled and no winner
        ? "It's a Draw!"
        : `Next Player: ${isXNext ? "X" : "O"}`;

    return (
        <div className="game">
            <h1 className="text-2xl font-bold mb-4">Tic Tac Toe</h1>
            <div className="board grid grid-cols-3 gap-2">
                {board.map((cell, index) => (
                    <button
                        key={index}
                        className="cell w-16 h-16 flex items-center justify-center text-2xl font-bold bg-blue-200 border-2 border-blue-500"
                        onClick={() => handleClick(index)}
                    >
                        {cell}
                    </button>
                ))}
            </div>
            <p className="status mt-4 text-lg">{status}</p>
            <button
                className="reset-btn mt-4 px-4 py-2 bg-blue-500 text-white font-bold rounded"
                onClick={resetGame}
            >
                Reset Game
            </button>
        </div>
    );
};

// Helper function to calculate the winner
const calculateWinner = (board) => {
    const lines = [
        [0, 1, 2], // Rows
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6], // Columns
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8], // Diagonals
        [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            return board[a]; // Return the winner (X or O)
        }
    }
    return null; // No winner
};

export default TicTacToe;
