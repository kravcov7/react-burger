import cn from "classnames";
import s from "./orders.module.css";

export function Orders({ orders, total, totalToday }) {
  
  const doneOrders = orders?.filter((el) => el.status === "done");
  const pendingOrders = orders?.filter((el) => el.status !== "done"); 

  return (
    <section className="mt-25">
      <div className={s.table}>
        <div className={s.ready}>
          <h2 className={cn(s.title, "text text_type_main-medium mb-6")}>Готовы:</h2>
          <ul className={s.list}>
            {doneOrders?.map((el) => (
              <li key={el.number} className={cn(s.text, "text text_type_digits-default mb-2")}>{el.number}</li>
            ))}
          </ul>
        </div>
        <div className={s.progress}>
          <h2 className="text text_type_main-medium mb-6">В работе:</h2>
          <ul className={s.list}>
            {pendingOrders?.map((el) => (
              <li key={el.number} className={cn(s.text, "text text_type_digits-default mb-2")}>{el.number}</li>
            ))}
          </ul>
         
        </div>
      </div>

      <div className="mb-15">
        <h2 className="text text_type_main-medium">Выполнено за все время:</h2>
        <p className={cn(s.num, "text text_type_digits-large")}>{total} </p>
      </div>
      <div className="">
        <h2 className="text text_type_main-medium">Выполнено за сегодня:</h2>
        <p className={cn(s.num, "text text_type_digits-large")}>{totalToday}</p>
      </div>
    </section>
  );
}

export default Orders;
