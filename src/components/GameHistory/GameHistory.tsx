import './gameHistory.css';

export default function GameHistory({ moves }: { moves: React.ReactNode[] } ) {
  return (
    <div className="game-history">
      <span>History</span>

      <ol className="game-history-list">{moves}</ol>
    </div>
  );
}