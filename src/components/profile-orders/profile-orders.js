import { Link } from "react-router-dom";
import Burger from "../burger/burger";
// import { data } from "../../utils/data";
import { useLocation } from "react-router-dom";
import { WS_CONNECTION_START_AUTH } from "../../services/actions/socketAuth";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getIngredients } from "../../services/actions/card";

import s from "./profile-orders.module.css";

export function ProfileOrders() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch]);
  const { data } = useSelector((store) => store.card);

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START_AUTH,
    });
  }, [dispatch]);
  const { messages } = useSelector((store) => store.wsAuth);
  console.log(messages);

  const location = useLocation();
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
