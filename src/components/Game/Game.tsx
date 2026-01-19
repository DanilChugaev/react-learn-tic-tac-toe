import { useState } from 'react';
import Board from '../Board/Board.tsx';
import GameHistory from '../GameHistory/GameHistory.tsx';
import type { TSquare } from '../../types.ts';
import './game.css';

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);

  const xIsNext = currentMove % 2 === 0;
  const currentSquares: TSquare[] = history[currentMove];

  const moves = history.map((_: TSquare[], move: number) => {
    let description = '';

    if (move > 0) {
      description = 'Go to move #' + move;
    } else {
      description = 'Go to game start';
    }

    return (
      <li key={move}>
        <button className="w-full" onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  function handlePlay(nextSquares: TSquare[]) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];

    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(nextMove: number) {
    setCurrentMove(nextMove);
  }

  return (
    <div className="game">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>

      <GameHistory moves={moves} />
    </div>
  );
}