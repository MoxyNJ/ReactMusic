import React, { useState, memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { PER_PAGE_NUMBER } from "@/common/contants";
import { getSongCategoryListAction } from "../../store/actionCreators";

import LJSongsCover from "@/components/songs-cover";
import LJPagination from "@/components/songs-pagination";
import { SongsMainWrapper } from "./style";
export default memo(function LJSongsMain() {
  // props
  // 记录当前的页数
  const [currentPage, setCurrentPage] = useState(1);

  // redux hoooks
  const {
    songList: { total = 0, playlists = [] },
  } = useSelector(
    (state) => ({
      songList: state.getIn(["songList", "songList"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // handle function
  // 子数组通信，改变展示歌单的页数。
  function onPageChange(page) {
    setCurrentPage(page);
    dispatch(getSongCategoryListAction(page));
  }

  return (
    <SongsMainWrapper>
      <div className="songs-list">
        {playlists.map((item, index) => {
          return <LJSongsCover info={item} key={index} right="30px" />;
        })}
      </div>
      <LJPagination
        currentPage={currentPage}
        total={total}
        pageSize={PER_PAGE_NUMBER}
        onPageChange={onPageChange}
      />
    </SongsMainWrapper>
  );
});
