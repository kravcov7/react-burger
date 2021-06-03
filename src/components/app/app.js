import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppHeader from "../app-header/app-header";
import { BurgerBlock } from "../burger-block/burger-block";
import s from "./App.module.css";
import { NotFound404 } from "../../pages/not-found-404/not-found-404";
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import Feed from "../../pages/feed/feed";
import Profile from "../../pages/profile/profile";
import Ingredients from "../../pages/ingredients/ingredients";

function App() {
  return (
    <div className={s.container}>
      <Router>
        <AppHeader />
        <Switch>
          <Route path="/" exact={true}>
            <BurgerBlock />
          </Route>
          <Route path="/login" exact={true}>
            <Login />
          </Route>
          <Route path="/register" exact={true}>
            <Register />
          </Route>
          <Route path="/forgot-password" exact={true}>
            <ForgotPassword />
          </Route>
          <Route path="/reset-password" exact={true}>
            <ResetPassword />
          </Route>
          <Route path="/feed" exact={true}>
            <Feed />
          </Route>
          <Route path="/feed/:id" exact={true}>
            <h1>страница заказа в ленте.</h1>
          </Route>
          <Route path="/profile" exact={true}>
            <Profile />
          </Route>
          <Route path="/profile/orders" exact={true}>
            <h1>страница истории заказов пользователя</h1>
          </Route>
          <Route path="/profile/orders/:id" exact={true}>
            <h1>страница заказа в истории заказов</h1>
          </Route>
          <Route path="/ingredients/:id" exact={true}>
            <Ingredients />
          </Route>
          <Route>
            <NotFound404 />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
