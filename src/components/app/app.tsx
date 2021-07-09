import React from "react";
import {  Switch, Route, Redirect, useHistory, useLocation } from "react-router-dom";
import AppHeader from "../app-header/app-header";
import BurgerBlock from "../burger-block/burger-block";
import s from "./App.module.css";
import { NotFound404 } from "../../pages/not-found-404/not-found-404";
import Login from "../../pages/login/login";
import Register from "../../pages/register/register";
import ForgotPassword from "../../pages/forgot-password/forgot-password";
import ResetPassword from "../../pages/reset-password/reset-password";
import Feed from "../../pages/feed/feed";
import Profile from "../../pages/profile/profile";
// import Ingredients from "../../pages/ingredients/ingredients";
import ItemDetails from "../item-detail/item-detail";
import { getRefreshToken } from "../../utils/token";
import { ProtectedRoute } from "../protected-route";
import Modal from "../modal/modal";
import IngredientsDetails from "../ingredient-details/ingredient-details";
import OrderDetails from "../order-details/order-details";
import { useDispatch, useSelector } from "../../hooks";
import { getIngredients } from "../../services/actions/card";
import { TLocationTemplate } from "../../types";

// import ProfileOrders from "../profile-orders/profile-orders";

function App() {
  const location = useLocation<TLocationTemplate>();
  const dispatch = useDispatch();
  const history = useHistory();
  const background = (history.action === "PUSH" || history.action === "REPLACE") && location.state && location.state.background;

  const hasToken = !!getRefreshToken();
  const isforgotPasswordSaccess = useSelector((store) => store.auth.isforgotPasswordSaccess);

  const { dataReceived } = useSelector((store) => store.card);
  React.useEffect(() => {
    if (!dataReceived) {
      dispatch(getIngredients());
    }
  }, [dispatch, dataReceived]);

  return (
    <div className={s.container}>
      <AppHeader />
      <Switch location={background || location}>
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
        <ProtectedRoute path="/profile/orders/:id" exact={true}>
          <ItemDetails />
        </ProtectedRoute>
        <ProtectedRoute path="/profile">
          <Profile />
        </ProtectedRoute>
        <Route path="/ingredients/:id" exact={true}>
          <IngredientsDetails />
        </Route>
        <Route>
          <NotFound404 />
        </Route>
      </Switch>
      {background && (
        <>
          <ProtectedRoute
            exact={true}
            path="/"
            children={
              <Modal>
                <OrderDetails />
              </Modal>
            }
          />
          <Route
            path="/ingredients/:id"
            children={
              <Modal>
                <IngredientsDetails />
              </Modal>
            }
          />
          <ProtectedRoute
            path="/profile/orders/:id"
            children={
              <Modal>
                <ItemDetails />
              </Modal>
            }
          />
          <Route
            path="/feed/:id"
            children={
              <Modal>
                <ItemDetails />
              </Modal>
            }
          />
        </>
      )}
    </div>
  );
}

export default App;
