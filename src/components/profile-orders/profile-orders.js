import { Link } from "react-router-dom";
import Burger from "../burger/burger";
// import { data } from "../../utils/data";
import { useLocation } from "react-router-dom";
import { WS_CONNECTION_START_AUTH } from "../../services/actions/socketAuth";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import { getIngredients } from "../../services/actions/card";

import s from "./profile-orders.module.css";

export function ProfileOrders() {
  const dispatch = useDispatch();
  const { data } = useSelector((store) => store.card);

  // useEffect(() => {
  //   if (!dataReceived) {
  //     dispatch(getIngredients());
  //   }
  // }, [dispatch, dataReceived]);

  useEffect(() => {
    dispatch({
      type: WS_CONNECTION_START_AUTH,
    });
  }, [dispatch]);
  const { messages } = useSelector((store) => store.wsAuth);
  
  const location = useLocation();
  return (
    <div className={s.burgers}>
      {messages.orders?.map((el, index) => (
         <Link to={{ pathname: `/profile/orders/${el.number}`, state: { background: location } }} key={index} className={s.burgerlink}>
           <Burger el={el} data={data} />
         </Link> 
      ))}
    </div>
  );
}

export default ProfileOrders;
