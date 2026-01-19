import type {TSquare} from '../types.ts';

export default function Square({
  value,
  onSquareClick,
}: {
  value: TSquare;
  onSquareClick: () => void;
}) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  )
}