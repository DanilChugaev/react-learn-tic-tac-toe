import Board from './Board.tsx';
import {useState} from 'react';
import type {TSquare} from '../types.ts';
import GameHistory from './History.tsx';

export default function Game() {
  const [xIsNext, setXIsNext] = useState(true);
  const [history, setHistory] = useState([Array(9).fill(null)]);

  const currentSquares: TSquare[] = history[history.length - 1];

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
    )
  })

  function handlePlay(nextSquares: TSquare[]) {
    setHistory([...history, nextSquares]);
    setXIsNext(!xIsNext);
  }

  function jumpTo(nextMove: number) {

  }

  return (
    <div className="game">
      <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay}/>

      <GameHistory moves={moves} />
    </div>
  )
}