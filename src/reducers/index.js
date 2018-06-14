import { combineReducers } from "redux";

import messagesReducer from "./messages";
import peopleReducer from "./people";

const chatReducer = combineReducers({
  peopleReducer,
  messagesReducer
});

export default chatReducer;
