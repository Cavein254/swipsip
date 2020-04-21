import { combineReducers } from "redux";
import user from "./userReducer";
import chats from "./userReducer";

const rootReducer = combineReducers({
  user,
  chats,
});

export default rootReducer;
