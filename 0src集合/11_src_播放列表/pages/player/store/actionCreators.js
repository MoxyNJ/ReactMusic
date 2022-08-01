import * as actionTypes from "./constants";

import { getSongDetail } from "@/services/player";

const changeCurrentSongAction = (res) => ({
  type: actionTypes.CHANGE_CURRENT_SONG,
  currentSong: res,
});

const changePlayListAction = (playList) => ({
  type: actionTypes.CHANGE_PLAY_LIST,
  playList,
});

const changeCurrentSongIndexAction = (index) => ({
  type: actionTypes.CHANGE_CURRENT_SONG_INDEX,
  index,
});

export const getSongDetailAction = (idx) => {
  return (dispatch, getState) => {
    // 1.根据ids查找playList中是否已经有该歌曲
    const playList = getState().getIn(["player", "playList"]);
    const songIndex = playList.findIndex((item) => item.id === idx);
    // 如果返回的是大于0的下标，则表明找到了。
    if (songIndex !== -1) {
      dispatch(changeCurrentSongIndexAction(songIndex));
      const songIds = playList[songIndex];
      dispatch(changeCurrentSongAction(songIds));
    } else {
      // 如果返回的是-1，则表明没找到，则请求歌曲
      getSongDetail(idx).then((res) => {
        // res.songs && 防止 songs 是 undefined
        const song = res.songs && res.songs[0];
        // !song 防止 song 是 undefined，如果是 undefined什么也不做，直接结束执行
        if (!song) return;
        // 1.将最新请求的歌曲添加到播放列表中
        const newPlayList = [...playList];
        newPlayList.push(song);

        // 2.更新redux中的值
        dispatch(changePlayListAction(newPlayList));
        dispatch(changeCurrentSongIndexAction(newPlayList.length - 1));
        dispatch(changeCurrentSongAction(song));
      });
    }

    // 列表中有歌曲，直接播放。
    // 列表中没有歌曲，添加歌曲。

    getSongDetail(idx).then((res) => {
      dispatch(changeCurrentSongAction(res.songs[0]));
    });
  };
};
