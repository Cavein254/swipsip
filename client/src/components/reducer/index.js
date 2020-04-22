import { combineReducers } from "redux";
import user from "./user_reducer";
import chat from "./chat_reducer";

const rootReducer = combineReducers({
  chat,
  user,
});

export default rootReducer;
