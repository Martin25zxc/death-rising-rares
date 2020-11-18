import React from "react";
import ReactDOM from "react-dom";

import "./styles/Modal.css";
function Modal(props) {
  if (!props.showModal) return null;

  return ReactDOM.createPortal(
    <div className="Modal ">
      <div className="Modal__container ">
        {props.title && <div>{props.title}</div>}

        <button onClick={props.onClose} className="Modal__close-button ">
          x
        </button>
        <div className="modal-body">{props.children}</div>
      </div>
    </div>,
    document.getElementById("modal")
  );
}

export default Modal;
