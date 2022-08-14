import React, { memo, useEffect, useRef } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { Carousel } from "antd";
import { NEW_ALBUMS_LIMIT } from "@/common/contants";
import { getNewAlbumsAction } from "../../store/actionCreators";

import LJThemeHeaderRCM from "@/components/theme-header-rcm";
import LJAlbumCover from "@/components/album-cover";
import { AlbumWrapper } from "./style";

export default memo(function LJNewAlbum() {
  // component state：组件内部的state

  // redux hooks：获取state和dispatch
  const { newAlbums } = useSelector(
    (state) => ({
      newAlbums: state.getIn(["recommend", "newAlbums"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();
  // other hooks：react的hooks
  const pageRef = useRef(0);

  useEffect(() => {
    dispatch(getNewAlbumsAction(NEW_ALBUMS_LIMIT));
  }, [dispatch]);
  // other function：组件内部的其他逻辑

  return (
    <div>
      <AlbumWrapper>
        <LJThemeHeaderRCM title="新碟上架" />
        <div className="content">
          <button
            className="arrow arrow-left sprite_02"
            onClick={(e) => pageRef.current.prev()}
          ></button>
          <div className="album">
            <Carousel dots={false} ref={pageRef}>
              {[0, 1].map((item) => {
                return (
                  <div key={item} className="page">
                    {newAlbums?.slice(item * 5, (item + 1) * 5).map((num) => {
                      return (
                        <LJAlbumCover
                          key={num.id}
                          info={num}
                          size={100}
                          width={118}
                          bgp={-570}
                          play={-85}
                        >
                          {num.name}
                        </LJAlbumCover>
                      );
                    })}
                  </div>
                );
              })}
            </Carousel>
          </div>
          <button
            className="arrow arrow-right sprite_02"
            onClick={(e) => {
              pageRef.current.next();
            }}
          ></button>
        </div>
      </AlbumWrapper>
    </div>
  );
});
