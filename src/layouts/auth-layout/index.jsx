import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import { AUTH_PREFIX_PATH } from "../../configs/AppConfig";
import { routes } from "../../routes";

function AuthLayout({ routes = [], props }) {
  return (
    <div>
      <Suspense fallback={<></>}>
        <Switch>
          {routes.map((route, index) => (
            <Route key={index} {...route} />
          ))}
          <Redirect
            from={`${AUTH_PREFIX_PATH}`}
            to={`${AUTH_PREFIX_PATH}/login`}
          />
          <Redirect to={`${AUTH_PREFIX_PATH}/404`} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default AuthLayout;
