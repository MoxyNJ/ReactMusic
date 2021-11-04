import * as actionTypes from "./constants";
import { PER_PAGE_NUMBER } from "@/common/contants";

import { getHotAlbums, getTopAlbums } from "@/services/album.js";

// 内部
const changeHotAlbumsAction = (res) => ({
  type: actionTypes.CHANGE_HOT_ALBUMS,
  hotAlbums: res.albums,
});

const changeTopAlbumAction = (res) => ({
  type: actionTypes.CHANGE_TOP_ALBUMS,
  topAlbums: res.albums,
});

const changeTopTotalAction = (total) => ({
  type: actionTypes.CHANGE_TOP_TOTAL,
  total: total,
});

// 异步action
// 获得热门新碟数据
export const getHotAlbumsAction = () => {
  return (dispatch) => {
    getHotAlbums().then((res) => {
      dispatch(changeHotAlbumsAction(res));
    });
  };
};

// 获得全部新碟数据
// page - 1
export const getTopAlbumsAction = (page) => {
  return (dispatch) => {
    getTopAlbums(30, (page - 1) * PER_PAGE_NUMBER).then((res) => {
      dispatch(changeTopAlbumAction(res));
      dispatch(changeTopTotalAction(res.total));
    });
  };
};
