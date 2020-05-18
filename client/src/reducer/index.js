import { combineReducers } from "redux";

import User from "./User_reducer";
import Products from "./Products_reducer";

const RootReducer = combineReducers({
  User,
  Products,
});

export default RootReducer;
