import React from "react";

// import cn from "classnames";
import s from "./burger-image.module.css";
import bun01 from "../../images/bun-01.png";

export function BurgerImage() {
  return (
    <section className={s.main}>
      {/* <ul className={s.container}>
        <li className={s.item} style={{ zIndex: 4 }}>
          <div className={s.img}>
            <img src={bun01} alt="фото" />
          </div>
        </li>
        <li className={s.item} style={{ zIndex: 3 }}>
          <div className={s.img}>
            <img src={bun01} alt="фото" />
          </div>
        </li>
        <li className={s.item} style={{ zIndex: 2 }}>
          <div className={s.img}>
            <img src={bun01} alt="фото" />
          </div>
        </li>
        <li className={s.item} style={{ zIndex: 1 }}>
          <div className={s.img}>
            <img src={bun01} alt="фото" />
          </div>
        </li>
        <li className={s.item} style={{ zIndex: 0 }}>
          <div className={s.img}>
            <img src={bun01} alt="фото" />
          </div>
        </li>
      </ul> */}
          <div className={s.img}>
            <img src={bun01} alt="фото" />
          </div>
    </section>
  );
}

export default BurgerImage;
