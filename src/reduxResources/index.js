import { reducer as formReducer } from "redux-form/immutable";
import { combineReducers } from "redux-immutable";
import * as defaultEpics from "utils/reduxObservableHelpers";
import { connectRouter } from "connected-react-router";
import { reducer as localeReducer } from "./locale";
import { reducer as ajaxReducer } from "./ajax";
import { reducer as usersReducer } from "./users";
import { reducer as userReducer } from "./user";
import { reducer as accountReducer } from "./account";
import { reducer as adminReducer} from './admin'
import { reducer as authReducer} from './auth'

const epics = {
  ...defaultEpics,
};

const createRootReducer = (history) =>
  combineReducers({
    form: formReducer,
    locale: localeReducer,
    ajax: ajaxReducer,
    users: usersReducer,
    user: userReducer,
    account: accountReducer,
    router: connectRouter(history),
    admin: adminReducer,
    auth: authReducer,
  });

export { epics, createRootReducer };
