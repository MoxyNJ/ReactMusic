import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store";

// 对所以组件的 reducer 进行融合
const cReducer = combineReducers({
  recommend: recommendReducer,
});

export default cReducer;
