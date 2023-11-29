import { useState } from 'react';
import { createPortal } from 'react-dom';
import ModalContent from './ModalContent';
import './PortalExample.css'

export default function PortalExample() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <button onClick={() => setShowModal(true)} className="btn btn-primary btn-sm">
        Para mas info
      </button>
      {showModal && createPortal(
        <ModalContent onClose={() => setShowModal(false)} />,
        document.body
      )}
    </>
  );
}
