import { createStore, applyMiddleware } from "redux";
import { logger } from "redux-logger";

import chatReducer from "reducers/index";

const chatStore = createStore(
  chatReducer,
  applyMiddleware(logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default chatStore;
