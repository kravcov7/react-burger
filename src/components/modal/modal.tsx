import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React, { FC }  from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import s from './modal.module.css';
import cn from 'classnames';
import { useHistory } from "react-router-dom";

const modalRoot: Element | null = document.getElementById("portal");

const Modal:FC = ({ children }) => {
  const history = useHistory(); 

  const closeEsc = (e: KeyboardEvent) => {
		if (e.code === 'Escape') close()			
	}

  React.useEffect(() => {
		window.addEventListener('keydown', closeEsc)
		return () => {
			window.removeEventListener('keydown', closeEsc)
		}
	})
  
  const close = () => {
    history.goBack();
  }
  
  return modalRoot && ReactDOM.createPortal(
    <>
      <div className={cn(s.modal, 'pr-15', 'pl-15', 'pt-20', 'pb-15')}>
        <div className={s.close} onClick={close}>
          <CloseIcon type='primary' />
        </div>
        <div>{ children }</div>
      </div>
      <ModalOverlay close={close} />
    </>,
    modalRoot,
  );
}

export default Modal;
