import './currentPlayer.css'

export function CurrentPlayer({ position }: { position: string }) {
  const player = position === 'left' ? 'X' : 'O';
  const classNames = `current-player current-player--${position}`;

  return <div className={classNames}>{player}</div>;
}