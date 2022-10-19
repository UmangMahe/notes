import { Suspense, useState } from "react";
import reactLogo from "./assets/react.svg";
import { Redirect, Route, Switch } from "react-router";
import { routes } from "./routes";
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from "./configs/AppConfig";

const RouteInterceptor = ({ children, isAuth, ...rest }) => {
  console.log(children);
  return (
    <Route {...rest}>
      {rest.path === AUTH_PREFIX_PATH ? (
        children
      ) : isAuth ? (
        children
      ) : (
        <Redirect to={AUTH_PREFIX_PATH} />
      )}
    </Route>
  );
};
function App(props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <Suspense fallback={<></>}>
        <Switch>
          <Route path="/" exact>
            <Redirect to={APP_PREFIX_PATH} />
          </Route>
          {routes.map((route, index) => (
            <RouteInterceptor key={index} {...route} isAuth={true}>
              <route.component {...props} routes={route.routes} />
            </RouteInterceptor>
          ))}
          <Redirect to={`${APP_PREFIX_PATH}/404`} />
        </Switch>
      </Suspense>
    </>
  );
}

export default App;
