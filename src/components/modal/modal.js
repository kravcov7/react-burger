import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <>
      <div className="">
        <div className=''>
          <CloseIcon type='primary' />
        </div>
        <div>{ children }</div>
      </div>
      <ModalOverlay />
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
