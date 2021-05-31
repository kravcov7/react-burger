import React from 'react';
import { setConstantValue } from 'typescript';

import AppHeader from '../app-header/app-header';
import { BurgerBlock} from '../burger-block/burger-block';
import s from './App.module.css'

function App() {  
  return (
    <div className={s.container}>
      <AppHeader />
      <BurgerBlock />           
    </div>
  );
}

export default App;
