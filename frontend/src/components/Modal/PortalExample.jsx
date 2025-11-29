
import { createPortal } from "react-dom";
import "./PortalExample.css";

export default function PortalExample({ children, onClose }) {
  return createPortal(
    <div className="modal-overlay">
      <div className="modal-content">

        <button className="modal-close" onClick={onClose}>X</button>

        {/* Aquí se muestra todo el texto que le pases */}
        {children}

      </div>
    </div>,
    document.getElementById("modal-root")

  );
}

