import { combineReducers } from "redux-immutable";

import { reducer as recommendReducer } from "../pages/discover/c-pages/recommend/store";
import { reducer as rankingReducer } from "../pages/discover/c-pages/ranking/store";
import { reducer as songListReducer } from "../pages/discover/c-pages/songList/store";
import { reducer as albumReducer } from "../pages/discover/c-pages/album/store";
import { reducer as djRadioReducer } from "../pages/discover/c-pages/djradio/store";
import { reducer as artistReducer } from "../pages/discover/c-pages/artist/store";

import { reducer as playerReducer } from "../pages/player/store";

// 对所以组件的 reducer 进行融合
export default combineReducers({
  player: playerReducer,
  recommend: recommendReducer,
  songList: songListReducer,
  ranking: rankingReducer,
  album: albumReducer,
  djRadio: djRadioReducer,
  artist: artistReducer,
});
