import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store";
import { reducer as playerReducer } from "../pages/player/store";

// 对所以组件的 reducer 进行融合
const cReducer = combineReducers({
  recommend: recommendReducer,
  player: playerReducer,
});

export default cReducer;
