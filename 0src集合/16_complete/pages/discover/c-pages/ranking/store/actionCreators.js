import * as actionTypes from "./constants";

import { getListTitle, getRankingList } from "@/services/ranking";

const changeListTitleAction = (res) => ({
  type: actionTypes.CHANGE_LIST_TITLE,
  listTitle: res.list,
});

const changePlayListAction = (res) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList: res.playlist,
});

// 外部暴露
export const changeCurrentIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_INDEX,
  currentIndex: index,
});

export const getListTitleAction = () => {
  return (dispatch) => {
    getListTitle().then((res) => {
      dispatch(changeListTitleAction(res));
    });
  };
};

export const getRankingAction = (id) => {
  return (dispatch) => {
    getRankingList(id).then((res) => {
      dispatch(changePlayListAction(res));
    });
  };
};
