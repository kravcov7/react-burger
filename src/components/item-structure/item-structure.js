import { CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import s from "./item-structure.module.css";
import cn from "classnames";
import BurgerImage from "../burger-image/burger-image";
import PropTypes from 'prop-types';

function ItemStructure({ el, count }) {
  
  return (
    <section className={s.main}>
      <div className={s.name}>
        <BurgerImage image={el.image_mobile} />
        <p className={cn(s.name, "ml-9 text text_type_main-default")}>{el.name}</p>
      </div>
      <div className={s.total}>
        <span className="mr-2 text text_type_digits-default">{count} X</span>
        <span className="mr-2 text text_type_digits-default">{el.price}</span>
        <CurrencyIcon />
      </div>
    </section>
  );
}

ItemStructure.propTypes = {
  el: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
};

export default ItemStructure;
