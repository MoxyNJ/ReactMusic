import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { PER_PAGE_NUMBER } from "@/common/contants";
import { getTopAlbumsAction } from "../../store/actionCreators";

import LJThemeHeaderAlbum from "@/components/theme-header-album";
import LJAlbumCover from "@/components/album-cover";
import LJPagination from "@/components/songs-pagination";
import { TopAlbumWrapper } from "./style";

export default memo(function LJAlbumTop() {
  const [currentPage, setCurrentPage] = useState(1);

  const { topAlbums, total } = useSelector(
    (state) => ({
      topAlbums: state.getIn(["album", "topAlbums"]),
      total: state.getIn(["album", "topTotal"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTopAlbumsAction(1));
  }, [dispatch]);

  const onPageChange = (page) => {
    setCurrentPage(page);
    dispatch(getTopAlbumsAction(page));
  };

  return (
    <TopAlbumWrapper>
      <LJThemeHeaderAlbum title="全部新碟" />
      <div className="album-list">
        {topAlbums.map((item, index) => {
          return (
            <LJAlbumCover
              size={"130px"}
              width={"153px"}
              bgp={"-845px"}
              key={item.id}
              info={item}
            />
          );
        })}
      </div>
      <LJPagination
        currentPage={currentPage}
        total={total}
        pageSize={PER_PAGE_NUMBER}
        onPageChange={onPageChange}
      />
    </TopAlbumWrapper>
  );
});
