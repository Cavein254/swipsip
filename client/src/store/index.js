import { createStore, applyMiddleware, compose } from "redux";
import ReduxThunk from "redux-thunk";
import Reducer from "../reducer";
import reduxPromise from "redux-promise";

const initialState = {};
const middleware = [ReduxThunk, reduxPromise];

const store = createStore(
  Reducer,
  initialState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
export default store;
