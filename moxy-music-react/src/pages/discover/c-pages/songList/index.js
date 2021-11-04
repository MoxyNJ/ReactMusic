import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";

import {
  getSongCategoryAction,
  getSongCategoryListAction,
  changeCurrentCategoryAction,
} from "./store/actionCreators";

import LJSongsHeader from "./c-cpns/songs-header";
import LJSongsMain from "./c-cpns/songs-main";

import { SongListWrapper } from "./style";
export default memo(function LJSongList() {
  // redux hooks
  const dispatch = useDispatch();

  useEffect(() => {
    // 全部歌单类名
    dispatch(getSongCategoryAction());
    // 展示初始内容
    dispatch(getSongCategoryListAction(0));
    // 最初的菜单是“全部歌单”
    dispatch(changeCurrentCategoryAction("全部"));
  }, [dispatch]);

  return (
    <SongListWrapper className="wrap-v2">
      <LJSongsHeader />
      <LJSongsMain />
    </SongListWrapper>
  );
});
