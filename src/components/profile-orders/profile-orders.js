import { Link } from "react-router-dom";
// import cn from "classnames";
import Burger from "../burger/burger";
import { data } from '../../utils/data'

import s from "./profile-orders.module.css";

export function ProfileOrders() {
  console.log(data);
  return (
    <div className={s.burgers}>
    {data.map((element, index) => {
      console.log(element.name);
    return (
      <Link key={index} className={s.burgerlink} to={`/profile/orders/${index}`}>
        <Burger name={element.name} />
      </Link>
    )}
    )}
  </div>
  );
}

export default ProfileOrders;
