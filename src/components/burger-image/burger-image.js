import React from "react";
import s from "./burger-image.module.css";

export function BurgerImage({ image }) {
  return (
    <section className={s.main}>
      <div className={s.img}>
        <img src={image} alt="фото" />
      </div>
    </section>
  );
}

export default BurgerImage;
