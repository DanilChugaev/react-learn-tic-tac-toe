import { type ReactNode, useEffect, useRef } from 'react';
import './modalDialog.css';

export default function ModalDialog({ isOpen, children, onClose }: { isOpen: boolean, children: ReactNode, onClose: () => void }) {
  const dialogRef = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    if (isOpen) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [isOpen]);

  return (
    <dialog className="modal-dialog" ref={dialogRef}>
      <button className="modal-dialog-close" onClick={onClose}>x</button>
      {children}
    </dialog>
  );
}