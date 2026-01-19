import Square from './Square.tsx';
import {calculateWinner} from '../utils/calculateWinner.tsx';
import {CurrentPlayer} from './CurrentPlayer.tsx';
import {Reload} from './Reload.tsx';
import type {TSquare} from '../types.ts';

export default function Board({
  xIsNext,
  squares,
  onPlay,
}: {
  xIsNext: boolean;
  squares: TSquare[];
  onPlay: (nextSquares: TSquare[]) => void;
}) {
  const winner = calculateWinner(squares);

  let status;

  if (winner) {
    status = 'Winner: ' + winner;
  } else {
    status = 'Next player: ' + (xIsNext ? 'X' : 'O');
  }

  function handleClick(i: number) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();

    nextSquares[i] = xIsNext ? "X" : "O";

    onPlay(nextSquares);
  }

  return (
    <div className="board-container">
      {xIsNext && !winner && <CurrentPlayer position="left"/>}

      <div className="status">{status}</div>

      <div className="board">
        <div className="board-row">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)}/>
          <Square value={squares[1]} onSquareClick={() => handleClick(1)}/>
          <Square value={squares[2]} onSquareClick={() => handleClick(2)}/>
        </div>

        <div className="board-row">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)}/>
          <Square value={squares[4]} onSquareClick={() => handleClick(4)}/>
          <Square value={squares[5]} onSquareClick={() => handleClick(5)}/>
        </div>

        <div className="board-row">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)}/>
          <Square value={squares[7]} onSquareClick={() => handleClick(7)}/>
          <Square value={squares[8]} onSquareClick={() => handleClick(8)}/>
        </div>
      </div>

      <Reload />

      {!xIsNext && !winner && <CurrentPlayer position="right"/>}
    </div>
  );
}