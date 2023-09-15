import { reduxGenerator } from "utils/reduxHelpers";

const { reducer, actions, selectors: accountSelectors } = reduxGenerator("account");

export { reducer, actions as accountActions, accountSelectors };
