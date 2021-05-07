import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import s from './modal.module.css';
import cn from 'classnames';

function Modal({ setModal, children }) {

  const close = () => {
    setModal({
      isShow:false,
      content: null,
    })
  }
  return ReactDOM.createPortal(
    <>
      <div className={cn(s.modal)}>
        <div className={s.close} onClick={close}>
          <CloseIcon type='primary' />
        </div>
        <div>{ children }</div>
      </div>
      <ModalOverlay onClick={close} />
    </>,
    document.getElementById("portal")
  );
}

export default Modal;
