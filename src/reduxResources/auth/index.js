import { reduxGenerator } from "utils/reduxHelpers";

const { reducer, actions, selectors: authSelectors } = reduxGenerator("auth");

export { reducer, actions as authActions, authSelectors };
