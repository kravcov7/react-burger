import {FC} from 'react';
import s from './modal-overlay.module.css';

type TProps = {	close: () => void}

const ModalOverlay: FC<TProps> = ({ close }) => {
  return (
    <div className={s.overlay} onClick={ close }>          
    </div>
  );
}

export default ModalOverlay;
