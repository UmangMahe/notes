import { lazy } from "react";
import { APP_PREFIX_PATH, AUTH_PREFIX_PATH } from "../configs/AppConfig";

export const routes = [
    {
        path: AUTH_PREFIX_PATH,
        exact: false,
        meta: {
          auth: false,
          title: "Login",
        },
        component: lazy(() => import("../layouts/auth-layout")),
        routes: [
          {
            path: `${AUTH_PREFIX_PATH}/login`,
            exact: true,
            meta: {
              auth: false,
            },
            component: lazy(() =>
              import("../views/auth-views/Login")
            ),
          },
        ]
    },
    {
        path: APP_PREFIX_PATH,
        exact: false,
        meta: {
            auth: false,
            title: "Frontend Assignment"
        },
        component: lazy(()=> import("../layouts/app-layout")),
        routes: [
            {
                path: `${APP_PREFIX_PATH}/home`,
                exact: true,
                meta: {
                    auth: false,
                    title: 'Frontend Assignment',
                },
                component: lazy(()=>import("../views/app-views/Home"))
            }
        ]
    }
]