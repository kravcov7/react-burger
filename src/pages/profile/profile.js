import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadUser } from "../../services/actions/auth";
import { updateUser } from '../../services/actions/auth';
import { logOut } from '../../services/actions/auth';


import s from "./profile.module.css";
import ProfileOrders from "../../components/profile-orders/profile-orders";

export function Profile() {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    nameDisabled: true,
    emailDisabled: true,
    passwordDisabled: true,
  });  

  const dispatch = useDispatch();
  const currentUserName = useSelector(store => store.auth.name);
	const currentUserEmail = useSelector(store => store.auth.email);

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  useEffect(() => {
		setState(state => {
			return {
				...state,
				name: currentUserName,
				email: currentUserEmail
			}
		});
	}, [currentUserName, currentUserEmail])

  const handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    setState({
      ...state,
      [name]: value,
    });
  };  

  const nameInputRef = React.useRef(null);
  const emailInputRef = React.useRef(null);
  const passwordInputRef = React.useRef(null);

  const activeNameInput = () => {
    setState({
      ...state,
      nameDisabled: state.nameDisabled ? false : true,
    });
    nameInputRef.current.disabled = false;
    setTimeout(() => nameInputRef.current.focus(), 0);
  };

  const activeEmailInput = () => {
    setState({
      ...state,
      emailDisabled: state.emailDisabled ? false : true,
    });
    emailInputRef.current.disabled = false;
    setTimeout(() => emailInputRef.current.focus(), 0);
  };

  const activePasswordInput = () => {
    setState({
      ...state,
      passwordDisabled: state.passwordDisabled ? false : true,
    });
    passwordInputRef.current.disabled = false;
    setTimeout(() => passwordInputRef.current.focus(), 0);
  };

  const nameIcon = state.nameDisabled ? "EditIcon" : "CloseIcon";
  const emailIcon = state.emailDisabled ? "EditIcon" : "CloseIcon";
  const passwordIcon = state.passwordDisabled ? "EditIcon" : "CloseIcon";

  // const handleClick = (e) => {
  // 	e.preventDefault();
  // 	setState({
  // 		...state,
  // 		name: currentUserName,
  // 		email: currentUserEmail,
  // 		password: ''
  // 	});
  // }

  const submit = e => {
    e.preventDefault();
    let data = {};
		data = state.name !== currentUserName ? { ...data, name: state.name } : data;
		data = state.email !== currentUserEmail ? { ...data, email: state.email } : data;
		data = state.password.length !== 0 ? { ...data, password: state.password } : data;
		console.log({ ...data });
    dispatch(updateUser({...data}))
  }

  const clickHandler = () => {
		dispatch(logOut())
	}

  const loadUserRequest = useSelector(store => store.auth)

  // if (loadUserRequest) {
  //   return (<p>333</p>)
  // }

  return (
    <section className={cn(s.main, "mt-30")}>
      <div className={s.menu}>
        <NavLink to="/profile" exact activeClassName={s.active} className={cn(s.link, "text text_type_main-large mb-6")}>
          Профиль
        </NavLink>
        <NavLink to="/profile/orders" exact activeClassName={s.active} className={cn(s.link, "text text_type_main-large mb-6")}>
          История заказов
        </NavLink>
        <NavLink to="/" exact activeClassName={s.active} onClick={clickHandler} className={cn(s.link, "text text_type_main-large mb-6")}>
          Выход
        </NavLink>

        <p className="text text_type_main-default text_color_inactive mt-20">В этом разделе вы моежете изменить свои персональные данные</p>
      </div>
      <div className={cn(s.inputs, "ml-15")}>
        <Switch>
          <Route path="/profile" exact>
            <form className={s.inputs} onSubmit={submit}>
              <Input type={"text"} placeholder="Имя" size={"default"} onChange={handleInputChange} value={state.name} icon={"EditIcon"} name="name" errorText={"Ошибка"} disabled={state.nameDisabled} onIconClick={activeNameInput} icon={nameIcon} ref={nameInputRef} />
              <Input type={"email"} placeholder="Почта" size={"default"} onChange={handleInputChange} value={state.email} name="email" errorText={"Неправильный email"} icon={emailIcon} disabled={state.emailDisabled} ref={emailInputRef} onIconClick={activeEmailInput} onIconClick={activeEmailInput} />
              <Input name="password" type="password" placeholder="Пароль" size={"default"} onChange={handleInputChange} value={state.password} errorText={"Ошибка в пароле"} icon={passwordIcon} ref={passwordInputRef} onIconClick={activePasswordInput} disabled={state.passwordDisabled} onIconClick={activePasswordInput} />
              { state.name !== currentUserName || state.email !== currentUserEmail || state.password.length !== 0 ? <div className={s.button}>
                <Button type="secondary" size="large" className="mt-6">
                  Отмена
                </Button>
                <Button type="primary" size="large" className="mt-6">
                  Сохранить
                </Button>
              </div> : null}
            </form>
          </Route>
          <Route path="/profile/orders" exact>
            <ProfileOrders />
          </Route>
        </Switch>
      </div>
    </section>
  );
}

export default Profile;
