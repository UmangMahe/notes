import { Content } from "antd/lib/layout/layout";
import React, { Suspense } from "react";
import { Redirect, Route, Switch } from "react-router";
import { APP_PREFIX_PATH } from "../../configs/AppConfig";

function AppLayout({ routes, ...props }) {
  return (
    <div className="app-layout container-fluid">
      <Suspense>
        <Content>
          <Switch>
            <Route exact path={APP_PREFIX_PATH}>
              <Redirect to={`${APP_PREFIX_PATH}/home`} />
            </Route>
            {routes.map((route, index) => (
              <Route key={index} {...route}>
                <route.component {...props} />
              </Route>
            ))}

            <Redirect to={`${APP_PREFIX_PATH}/404`} />
          </Switch>
        </Content>
      </Suspense>
    </div>
  );
}

export default AppLayout;
