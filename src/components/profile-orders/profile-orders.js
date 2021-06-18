import { Link } from "react-router-dom";
import Burger from "../burger/burger";
import { data } from "../../utils/data";
import {	useLocation} from 'react-router-dom';

import s from "./profile-orders.module.css";

export function ProfileOrders() {
  let location = useLocation();
  return (
    <div className={s.burgers}>
      {data.map((element, index) => (
        <Link to={{ pathname: `/profile/orders/${index}`, state: { background: location } }} key={index} className={s.burgerlink}>
          <Burger name={element.name} status={"completed"} />
        </Link>
      ))}
    </div>
  );
}

export default ProfileOrders;
