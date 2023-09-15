import keyMirror from "keymirror";

const REDUX_SUFFIXES = keyMirror({
  GET_ALL_AJAX: null,
  GET_ALL_SUCCEEDED: null,
  GET_ALL_FAILED: null,
  GET_ALL_CLEAN: null,

  GET_AJAX: null,
  GET_SUCCEEDED: null,
  GET_FAILED: null,
  GET_CLEAN: null,

  INSERT_AJAX: null,
  INSERT_SUCCEEDED: null,
  INSERT_FAILED: null,
  INSERT_CLEAN: null,

  UPDATE_AJAX: null,
  UPDATE_SUCCEEDED: null,
  UPDATE_FAILED: null,
  UPDATE_CLEAN: null,

  DELETE_AJAX: null,
  DELETE_SUCCEEDED: null,
  DELETE_FAILED: null,
  DELETE_CLEAN: null,
});

const AJAX_SUFFIXES = {
  BEGIN_AJAX_CALL_SUFFIX: "_AJAX",
  AJAX_CALL_SUCCEEDED_SUFFIX: "_SUCCEEDED",
  AJAX_CALL_FAILED_SUFFIX: "_FAILED",
};

export const PATHS = {
  LOGIN: "/login",
  LIST: "/lead/list",
  NOT_FOUND: "/404",
  NOT_AUTHOR: "/401",
  ADD: "/lead/add",
  EDIT: "/lead/edit/:id",
  DETAIL: "/lead/detail/:id",
  ADMIN: "/lead/admin",
};

export const SERVICE_API =
  "https://64fc3dd2605a026163ae4b55.mockapi.io/REF_LEADS";
  
export const ADMIN_SERVICE_API ="https://64fc3dd2605a026163ae4b55.mockapi.io"

export const DUMMY_USER_CREDENTIALS = [
  {
    username: "admin",
    password: "password"
  },
  {
    username: "user",
    password: "password"
  },
];

export { REDUX_SUFFIXES, AJAX_SUFFIXES };

export const ADMIN_AUTH = ["admin", "superadmin",]