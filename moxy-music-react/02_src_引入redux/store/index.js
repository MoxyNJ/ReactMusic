import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

// 使用 redux dev tool
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// 使用 applyMiddleware 中间件
// 使用 redux-thunk
const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));

export default store;
