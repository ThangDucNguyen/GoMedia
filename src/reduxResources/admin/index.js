import { reduxGenerator } from "utils/reduxHelpers";

const { reducer, actions, selectors: adminSelectors } = reduxGenerator("admin");

export { reducer, actions as adminActions, adminSelectors };
