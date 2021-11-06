import * as actionTypes from "./constants";

import { getArtistList } from "@/services/artist";

// singer: 地区大类
export const changeCurrentAreaAction = (area) => ({
  type: actionTypes.CHANGE_CURRENT_AREA,
  currentArea: area,
});

// singer: 歌手小类
export const changeCurrentTypeAction = (type) => ({
  type: actionTypes.CHANGE_CURRENT_TYPE,
  currentType: type,
});

// singer: 详细列表
const changeArtistListAction = (artistList) => ({
  type: actionTypes.CHANGE_ARTIST_LIST,
  artistList,
});

// 异步action
// singer: 详细列表
// 变量：地区大类、歌手小类、第n页（ABC）
// 变量：  area 、  type 、initial

/** 地区大类：
 * -1 推荐
 *  7 华语
 * 96 欧美
 *  8 日本
 * 16 韩国
 *  0 其他
 * **/
export const getArtistListAction = (area, type, alpha) => {
  return (dispatch) => {
    getArtistList(area, type, alpha).then((res) => {
      dispatch(changeArtistListAction(res.artists));
    });
  };
};
