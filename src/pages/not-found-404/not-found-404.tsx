import { NavLink } from "react-router-dom";
import s from "./not-found-404.module.css";
import { ConstructorElement, Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";

export const NotFound404 =() => {
  return (
    <>
      <h1>Oops! 404 Error! Старница не найдена</h1>
      <NavLink exact to="/react-burger/" className={s.link} activeClassName={s.active}>            
        <Button type="primary" size="large" >
            <span className=''>На главную</span>
        </Button>
      </NavLink>
      
    </>
  );
}
