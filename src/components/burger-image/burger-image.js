import s from "./burger-image.module.css";
import PropTypes from 'prop-types';

export function BurgerImage({ image }) {
  return (
    <section className={s.main}>
      <div className={s.img}>
        <img className={s.icon} src={image} alt="фото" />
      </div>
    </section>
  );
}

BurgerImage.propTypes = {
  image: PropTypes.string.isRequired, 
};

export default BurgerImage;
