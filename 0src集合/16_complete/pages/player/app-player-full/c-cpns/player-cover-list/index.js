import React, { memo, useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getSizeImage } from "@/utils/format-utils";
import { getSimiPlaylistAction } from "../../../store/actionCreators";

import LJThemeHeaderPlayer from "@/components/theme-header-player";
import { PlayerCoverListWrapper } from "./style";

export default memo(function LJPlayerCoverList() {
  // redux hooks
  const { simiPlaylist } = useSelector(
    (state) => ({
      simiPlaylist: state.getIn(["player", "simiPlaylist"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other hooks
  useEffect(() => {
    dispatch(getSimiPlaylistAction());
  }, [dispatch]);

  return (
    <PlayerCoverListWrapper>
      <LJThemeHeaderPlayer title="包含这首歌的歌单" />
      <div className="songs">
        {simiPlaylist.map((item, index) => {
          return (
            <div className="song-item" key={item.id}>
              <a className="image" href="/todo">
                <img src={getSizeImage(item.coverImgUrl, 50)} alt={item.mame} />
              </a>
              <div className="info text-nowrap">
                <a href="/todo" className="name">
                  {item.name}
                </a>
                <div className="didv"></div>
                <div className="text-nowrap">
                  <span>by</span>
                  <a href="/todo" className="nickname">
                    {item.creator && item.creator.nickname}
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </PlayerCoverListWrapper>
  );
});
