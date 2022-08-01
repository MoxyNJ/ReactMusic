import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getHotAlbumsAction } from "../../store/actionCreators";

import LJAlbumCover from "@/components/album-cover";
import LJThemHeader from "@/components/theme-header";
import { HotAlbumWrapper } from "./style";

export default memo(function LJAlbumHot() {
  const { hotAlbums } = useSelector(
    (state) => ({
      hotAlbums: state.getIn(["album", "hotAlbums"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getHotAlbumsAction());
  }, [dispatch]);

  return (
    <HotAlbumWrapper>
      <LJThemHeader title="热门新碟" />
      <div className="album-list">
        {/* 只要前10个 */}
        {hotAlbums.slice(0, 10).map((item, index) => {
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
    </HotAlbumWrapper>
  );
});
