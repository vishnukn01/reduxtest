import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk"; //helps in executing async functions
import reducers from "./reducers";

export const store = createStore(reducers, {}, applyMiddleware(thunk));
