import { Map } from "immutable";

import * as actionTypes from "./constants";

const defaultState = Map({
  topBanners: [],
  hotRecommends: [],
  newAlbums: [],
  upRankingList: [],
  newRankingList: [],
  orgRankingList: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_TOP_BANNERS:
      return state.set("topBanners", action.topBanners);
    case actionTypes.CHANGE_HOT_RECOMMENDS:
      return state.set("hotRecommends", action.hotRecommends);
    case actionTypes.CHANGE_NEW_ALBUMS:
      return state.set("newAlbums", action.newAlbums);
    case actionTypes.CHANGE_UP_RANKING_LIST:
      return state.set("upRankingList", action.upRankingList);
    case actionTypes.CHANGE_NEW_RANKING_LIST:
      return state.set("newRankingList", action.newRankingList);
    case actionTypes.CHANGE_ORG_RANKING_LIST:
      return state.set("orgRankingList", action.orgRankingList);
    default:
      return state;
  }
}

export default reducer;
