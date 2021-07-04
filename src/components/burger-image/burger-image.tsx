import s from "./burger-image.module.css";
import { FC } from 'react';

const BurgerImage: FC<{image: string}> = ({ image }) => {
  return (
    <section className={s.main}>
      <div className={s.img}>
        <img className={s.icon} src={image} alt="фото" />
      </div>
    </section>
  );
}

export default BurgerImage;
