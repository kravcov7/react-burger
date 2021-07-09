const getDaysOrders = (days: number) => (
  days === 0 ? 'Сегодня'
    : days === 1 ? 'Вчера'
      : days > 1 ? `${days} дня(-ей) назад`
        : 'Что-то пошло не так');

//сформировать тату создания заказа для карточки
export const getTimeOrders = (date: string) => {
  const dayCreated: Date = new Date(date);
  const today: Date = new Date();
  today.setHours(0, 0, 0, 0);
  const diffTime = Math.ceil((Number(today) - Number(dayCreated)) / (60 * 60 * 24 * 1000));
  const hours = dayCreated.getHours() > 9 ? dayCreated.getHours() : `0${dayCreated.getHours()}`
  const min = dayCreated.getMinutes() > 9 ? dayCreated.getMinutes() : `0${dayCreated.getMinutes()}`

  return `${getDaysOrders(diffTime)}, ${hours}:${min} i-GMT+${dayCreated.getTimezoneOffset() * (-1) / 60}`;
};

export const getStat = (status: string) => (status === "done") ? { text: "Выполнен", colorText: "green" } : status === "pending" ? { text: "Отменен", colorText: "red" } : { text: "Готовится", colorText: "white" };