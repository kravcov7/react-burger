import { Link } from "react-router-dom";
// import cn from "classnames";
import Burger from "../burger/burger";

import s from "./profile-orders.module.css";

export function ProfileOrders() {
  const burgers = [ 1, 2, 3, 4, 5]
  return (
    <div className={s.burgers}>
    {burgers.map((element, index) => (
      <Link key={index} className={s.burgerlink} to={`/profile/orders/${index}`}>
        <Burger />
      </Link>
    ))}
  </div>
  );
}

export default ProfileOrders;
