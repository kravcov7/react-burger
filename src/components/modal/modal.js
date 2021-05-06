import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";

function Modal() {
  return ReactDOM.createPortal(
    <>
      <div className="">
        <h1>jdscnsjns</h1>
      </div>
      <ModalOverlay />
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
