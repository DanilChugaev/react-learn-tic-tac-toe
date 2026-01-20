import { type ReactNode, useState } from 'react';
import './gameHistory.css';
import ModalDialog from '../ModalDialog/ModalDialog.tsx';

export default function GameHistory({ moves }: { moves: ReactNode[] } ) {
  const [isOpen, setIsOpen] = useState(false);

  function handleOpenDialog() {
    setIsOpen(true);
  }

  function handleCloseDialog() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={handleOpenDialog}>Open History</button>

      <ModalDialog isOpen={isOpen} onClose={handleCloseDialog}>
        <div className="game-history">
          <span>History</span>

          <ol className="game-history-list">{moves}</ol>
        </div>
      </ModalDialog>
    </>
  );
}