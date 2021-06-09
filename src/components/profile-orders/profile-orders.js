import { Link } from "react-router-dom";
import Burger from "../burger/burger";
import { data } from "../../utils/data";

import s from "./profile-orders.module.css";

export function ProfileOrders() {
  return (
    <div className={s.burgers}>
      {data.map((element, index) => (
        <Link key={index} className={s.burgerlink} to={`/profile/orders/${index}`}>
          <Burger name={element.name} status={"completed"} />
        </Link>
      ))}
    </div>
  );
}

export default ProfileOrders;
