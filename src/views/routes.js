import asyncComponent from "components/asyncComponent";
import { PATHS } from "appConstants";

function createRoutes(context = "") {
  return [
    {
      path: `${PATHS.LOGIN}`,
      exact: true,
      component: asyncComponent(() => {
        return import("./Login");
      })
    },
    {
      path: `${PATHS.LIST}`,
      exact: true,
      component: asyncComponent(() => {
        return import("./Home");
      }),
    },
    {
      path: `${PATHS.ADD}`,
      exact: true,
      component: asyncComponent(() => {
        return import("./CreateLead");
      }),
    },
    {
      path: `${PATHS.EDIT}`,
      component: asyncComponent(() => {
        return import("./EditLead");
      }),
    },
    {
      path: `${PATHS.NOT_FOUND}`,
      component: asyncComponent(() => {
        return import("./Page404");
      }),
    },
    {
      path: `${PATHS.NOT_AUTHOR}`,
      component: asyncComponent(() => {
        return import("./Page401");
      }),
    },
    {
      path: `${PATHS.DETAIL}`,
      component: asyncComponent(() => {
        return import("./DetailLead");
      }),
    },
    {
      path: `${PATHS.ADMIN}`,
      component: asyncComponent(() => {
        return import("./Admin");
      }),
    },
  ];
}

export { createRoutes };
