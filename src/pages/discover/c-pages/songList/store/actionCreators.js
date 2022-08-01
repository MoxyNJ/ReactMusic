import * as actionTypes from "./constants";
import { PER_PAGE_NUMBER } from "@/common/contants";

import { getSongCategoryList, getSongCategory } from "@/services/songList";
import { handleSongsCategory } from "@/utils/handle-data";
// 不暴露，内部action
const changeCategoryAction = (cate) => ({
  type: actionTypes.CHANGE_CATEGORY,
  category: cate,
});

const changeSongListAction = (list) => ({
  type: actionTypes.CHANGE_SONG_LIST,
  songList: list,
});

// 暴露，异步action
// 当前展示的歌单类名
export const changeCurrentCategoryAction = (name) => ({
  type: actionTypes.CHANGE_CURRENT_CATEGORY,
  currentCategory: name,
});

// 全部歌单类名
export const getSongCategoryAction = () => {
  return (dispatch) => {
    getSongCategory().then((res) => {
      dispatch(changeCategoryAction(handleSongsCategory(res)));
    });
  };
};

// 当前展示的歌单内容
export const getSongCategoryListAction = (page) => {
  return (dispatch, getState) => {
    // 获取歌单类名 currentCategory
    const name = getState().getIn(["songList", "currentCategory"]);

    getSongCategoryList(name, page * PER_PAGE_NUMBER).then((res) => {
      dispatch(changeSongListAction(res));
    });
  };
};
