import React from "react";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
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
import ItemDetails from "../item-detail/item-detail";
import { getRefreshToken } from "../../utils/token";
import { useSelector } from "react-redux";
import { ProtectedRoute } from '../protected-route';

// import ProfileOrders from "../profile-orders/profile-orders";

function App() {
  const hasToken = !!getRefreshToken();
  const isforgotPasswordSaccess = useSelector(store => store.auth.isforgotPasswordSaccess);
  console.log("token = ", hasToken);
  return (
    <div className={s.container}>     
        <AppHeader />
        <Switch>
          <Route path="/" exact={true}>
            <BurgerBlock />
          </Route>
          <Route path="/login" exact={true}>
            {hasToken && <Redirect to="/" />}
            <Login />
          </Route>
          <Route path="/register" exact={true}>
            {hasToken && <Redirect to="/" />}
            <Register />
          </Route>
          <Route path="/forgot-password" exact={true}>
            {!hasToken && <Redirect to="/" />}
            <ForgotPassword />
          </Route>
          <Route path="/reset-password" exact={true}>
          {!hasToken && !isforgotPasswordSaccess && <Redirect to="/" />}
            <ResetPassword />
          </Route>
          <Route path="/feed" exact={true}>
            <Feed />
          </Route>
          <Route path="/feed/:id" exact={true}>
            <ItemDetails />
          </Route>
          <Route path="/profile/orders/:id" exact={true}>
            <ItemDetails />
          </Route>
          <ProtectedRoute path="/profile">
            <Profile />
          </ProtectedRoute>
          <Route path="/ingredients/:id" exact={true}>
            <Ingredients />
          </Route>
          <Route>
            <NotFound404 />
          </Route>
        </Switch>
     
    </div>
  );
}

export default App;
