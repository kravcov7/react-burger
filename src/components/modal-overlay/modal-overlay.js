import React from 'react';
import s from './modal-overlay.module.css';
import PropTypes from 'prop-types';

function ModalOverlay({ close }) {
  return (
    <div className={s.overlay} onClick={ close }>          
    </div>
  );
}

ModalOverlay.propTypes = {
  close: PropTypes.func,
};

export default ModalOverlay;
