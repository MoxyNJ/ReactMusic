import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  category: [],
  currentCategory: "",
  songList: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CATEGORY:
      return state.set("category", action.category);
    case actionTypes.CHANGE_CURRENT_CATEGORY:
      return state.set("currentCategory", action.currentCategory);
    case actionTypes.CHANGE_SONG_LIST:
      return state.set("songList", action.songList);
    default:
      return state;
  }
}

export default reducer;
