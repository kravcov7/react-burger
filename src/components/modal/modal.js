import { CloseIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import React from "react";
import ReactDOM from "react-dom";
import ModalOverlay from "../modal-overlay/modal-overlay";
import s from './modal.module.css';
import cn from 'classnames';
import PropTypes from 'prop-types';

import { useHistory } from "react-router-dom";

function Modal({ children }) {
  const history = useHistory(); 

  const closeEsc = (e) => {
		if (e.keyCode === 27) close()			
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
  
  return ReactDOM.createPortal(
    <>
      <div className={cn(s.modal, 'pr-15', 'pl-15', 'pt-20', 'pb-15')}>
        <div className={s.close} onClick={close}>
          <CloseIcon type='primary' />
        </div>
        <div>{ children }</div>
      </div>
      <ModalOverlay close={close} />
    </>,
    document.getElementById("portal")
  );
}

Modal.propTypes = {
	children: PropTypes.element
}

export default Modal;
