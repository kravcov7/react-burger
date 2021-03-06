import { Input, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import cn from "classnames";
import { NavLink } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import React, { useEffect, SyntheticEvent, useState } from "react";
import { useDispatch, useSelector } from "../../hooks";
import { loadUser } from "../../services/actions/auth";
import { updateUser } from '../../services/actions/auth';
import { logOut } from '../../services/actions/auth';


import s from "./profile.module.css";
import ProfileOrders from "../../components/profile-orders/profile-orders";

const Profile = () => {
  const [state, setState] = useState({
    name: "",
    email: "",
    password: "",
    nameDisabled: true,
    emailDisabled: true,
    passwordDisabled: true,
  });  

  const dispatch = useDispatch();
  const currentUserName = useSelector((store) => store.auth.name);
	const currentUserEmail = useSelector((store) => store.auth.email);

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

  const handleInputChange = (event: SyntheticEvent<HTMLInputElement>): void => {
    const target = event.target as HTMLInputElement;
    const value = target.value;
    const name = target.name;
    setState({
      ...state,
      [name]: value,
    });
  };  

  const nameInputRef = React.useRef<HTMLInputElement>(null);
  const emailInputRef = React.useRef<HTMLInputElement>(null);
  const passwordInputRef = React.useRef<HTMLInputElement>(null);

  const activeNameInput = () => {
    setState({
      ...state,
      nameDisabled: state.nameDisabled ? false : true,
    });
    if (nameInputRef && nameInputRef.current) {
      nameInputRef.current.disabled = false;
    }
    setTimeout(() => nameInputRef && nameInputRef.current && nameInputRef.current.focus(), 0);
  };

  const activeEmailInput = () => {
    setState({
      ...state,
      emailDisabled: state.emailDisabled ? false : true,
    });
    if (emailInputRef && emailInputRef.current) {
      emailInputRef.current.disabled = false;
    }
    setTimeout(() => emailInputRef && emailInputRef.current && emailInputRef.current.focus(), 0);
  };

  const activePasswordInput = () => {
    setState({
      ...state,
      passwordDisabled: state.passwordDisabled ? false : true,
    });
    if (passwordInputRef && passwordInputRef.current) {
      passwordInputRef.current.disabled = false;
    }
    setTimeout(() => passwordInputRef && passwordInputRef.current && passwordInputRef.current.focus(), 0);
  };

  const nameIcon = state.nameDisabled ? "EditIcon" : "CloseIcon";
  const emailIcon = state.emailDisabled ? "EditIcon" : "CloseIcon";
  const passwordIcon = state.passwordDisabled ? "EditIcon" : "CloseIcon";

  const submit = (e: SyntheticEvent) => {
    e.preventDefault();
    let data = {};
		data = state.name !== currentUserName ? { ...data, name: state.name } : data;
		data = state.email !== currentUserEmail ? { ...data, email: state.email } : data;
		data = state.password.length !== 0 ? { ...data, password: state.password } : data;
		console.log({ ...data });
    dispatch(updateUser({...data}))
    setState({
      ...state,
      password: '',
      nameDisabled: true,
      emailDisabled: true,
      passwordDisabled: true,
    });
  }

  const clickHandler = () => {
		dispatch(logOut())
	}
 
  return (
    <section className={cn(s.main, "mt-30")}>
      <div className={s.menu}>
        <NavLink to="/profile" exact activeClassName={s.active} className={cn(s.link, "text text_type_main-large mb-6")}>
          ??????????????
        </NavLink>
        <NavLink to="/profile/orders" exact activeClassName={s.active} className={cn(s.link, "text text_type_main-large mb-6")}>
          ?????????????? ??????????????
        </NavLink>
        <NavLink to="/" exact activeClassName={s.active} onClick={clickHandler} className={cn(s.link, "text text_type_main-large mb-6")}>
          ??????????
        </NavLink>

        <p className="text text_type_main-default text_color_inactive mt-20">?? ???????? ?????????????? ???? ?????????????? ???????????????? ???????? ???????????????????????? ????????????</p>
      </div>
      <div className={cn(s.inputs, "ml-15")}>
        <Switch>
          <Route path="/profile" exact>
            <form className={s.inputs} onSubmit={submit}>
              <Input type={"text"} placeholder="??????" size={"default"} onChange={handleInputChange} value={state.name}  name="name" errorText={"????????????"} disabled={state.nameDisabled} onIconClick={activeNameInput} icon={nameIcon} ref={nameInputRef} />
              <Input type={"email"} placeholder="??????????" size={"default"} onChange={handleInputChange} value={state.email} name="email" errorText={"???????????????????????? email"} icon={emailIcon} disabled={state.emailDisabled} ref={emailInputRef} onIconClick={activeEmailInput} />
              <Input name="password" type="password" placeholder="????????????" size={"default"} onChange={handleInputChange} value={state.password} errorText={"???????????? ?? ????????????"} icon={passwordIcon} ref={passwordInputRef} onIconClick={activePasswordInput} disabled={state.passwordDisabled} />
              { state.name !== currentUserName || state.email !== currentUserEmail || state.password.length !== 0 ? <div className={s.button}>
                <Button type="secondary" size="large" >
                  ????????????
                </Button>
                <Button type="primary" size="large" >
                  ??????????????????
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
