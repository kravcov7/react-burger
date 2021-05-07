import React from 'react';
import s from './modal-overlay.module.css';


function ModalOverlay({ close }) {
  return (
    <div className={s.overlay} onClick={ close }>    
      
    </div>
  );
}

export default ModalOverlay;
