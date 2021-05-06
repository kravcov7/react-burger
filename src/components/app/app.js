import React from 'react';

import { AppHeader } from '../app-header/app-header';
import { BurgerBlock} from '../burger-block/burger-block';
import Modal from '../modal/modal';

function App() {

  const [modal, setModal] = React.useState({
    isShow: true
  })
  return (
    <div className=''>
      <AppHeader />
      <BurgerBlock />
      { modal.isShow && <Modal />}      
    </div>
  );
}

export default App;
