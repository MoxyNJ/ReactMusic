import React, { memo } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";

import { getSizeImage, formatMinuteSecond } from "@/utils/format-utils.js";
import { getSongDetailAction } from "@/pages/player/store/index";

import LJThemeHeaderRanking from "@/components/theme-header-ranking";

import { LJRankingListWrapper } from "./style";
export default memo(function LJRankingList() {
  // redux hooks
  // 多层嵌套的解构赋值
  const {
    playList,
    playList: { tracks = [] },
  } = useSelector(
    (state) => ({
      playList: state.getIn(["ranking", "playList"]),
    }),
    shallowEqual
  );

  const dispatch = useDispatch();

  // react hooks

  // other handle
  const playMusic = (item) => {
    dispatch(getSongDetailAction(item.id));
  };

  return (
    <LJRankingListWrapper>
      <LJThemeHeaderRanking
        titleName={"歌曲列表"}
        titleNumber={playList.tracks && playList.tracks.length}
        titlePlayer={playList.playCount}
      />
      <table>
        <thead>
          <tr>
            <th className="ranking"></th>
            <th className="title">
              <div className="content">标题</div>
            </th>
            <th className="duration">
              <div className="content">时长</div>
            </th>
            <th className="singer">
              <div className="content">歌手</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((item, index) => {
            return (
              <tr key={item.id} className="item">
                <td>
                  <div className="num">
                    <span className="text">{index + 1}</span>
                    <span className="iconN sprite_icon2"></span>
                  </div>
                </td>
                <td>
                  <div className="info">
                    {index < 3 ? (
                      <img
                        src={getSizeImage(item.al.picUrl, 50)}
                        alt={item.name}
                      />
                    ) : null}
                    <span
                      className="play sprite_table"
                      onClick={(e) => playMusic(item)}
                    ></span>
                    <span className="title">{item.name}</span>
                  </div>
                </td>
                <td className="pannel">
                  <div>
                    <div className="timeP">{formatMinuteSecond(item.dt)}</div>
                    <div className="operate">
                      <button className="btn addto sprite_icon2"></button>
                      <button className="btn collection sprite_table"></button>
                      <button className="btn share sprite_table"></button>
                      <button className="btn download sprite_table"></button>
                    </div>
                  </div>
                </td>
                <td>{item.ar[0].name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </LJRankingListWrapper>
  );
});
