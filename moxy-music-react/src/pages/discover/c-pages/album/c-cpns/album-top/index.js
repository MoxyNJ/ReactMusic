import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { PER_PAGE_NUMBER } from "@/common/contants";
import {
  getTopAlbumsAction,
  changeTopAreaAction,
} from "../../store/actionCreators";

import LJThemeHeader from "@/components/theme-header";
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
    dispatch(changeTopAreaAction());
  }, [dispatch]);

  const onPageChange = (page) => {
    setCurrentPage(page);
    dispatch(getTopAlbumsAction(page));
  };

  return (
    <TopAlbumWrapper>
      <LJThemeHeader title="全部新碟" subtitle={true} />
      <div className="album-list">
        {topAlbums.map((item, index) => {
          return (
            <LJAlbumCover
              size={130}
              width={153}
              height={153}
              bgp={-845}
              elemSize={"big"}
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
