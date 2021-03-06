import { useSelector, useDispatch } from "../hooks";
import { Redirect, Route } from "react-router-dom";
import { useEffect, FC } from "react";
import { getRefreshToken } from "../utils/token";
import { refreshToken } from '../services/actions/auth'
import Preloader from "./preloader/preloader";

type TProps = {	path: string; exact?: boolean}

export const ProtectedRoute: FC<TProps> = ({ children, ...rest }) => {
  const dispatch = useDispatch();
  const hasToken = !!getRefreshToken();
  const isTokenUpdated = useSelector((store) => store.auth.isTokenUpdated);
  const tokenUpdateDate = useSelector((store) => store.auth.tokenUpdateDate);

  useEffect(() => {
    if (hasToken && !isTokenUpdated) {
      dispatch(refreshToken());
    }
  }, [dispatch, hasToken, isTokenUpdated]);

  if (hasToken && !isTokenUpdated) {
    return <Preloader />;
  }

  return (
    <Route
      {...rest}
      render={({ location }) =>
        hasToken && tokenUpdateDate ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
}
