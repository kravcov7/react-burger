import { useSelector, useDispatch } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { useEffect } from "react";
import { getRefreshToken } from "./../utils/token";
import { refreshToken } from '../services/actions/auth'

export function ProtectedRoute({ children, ...rest }) {
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
    return (<p className="text text_type_main-large" >Идет загрузка...</p>);
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
