import './ModalContent.css'

export default function ModalContent({ onClose }) {
  return (
    <div className="modal">
      <div>Soy una ventana modal</div>
      <button onClick={onClose} className="btn btn-primary btn-sm">Cerrar</button>
    </div>
  );
}
