import * as actionTypes from "./constants";

import { getSongDetail, getLyric } from "@/services/player";
import { getRandomNumber } from "@/utils/math-utils";

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

export const changeSequenceAction = (sequence) => ({
  type: actionTypes.CHANGE_SEQUENCE,
  sequence,
});

// 上一首，下一首 的切换，采用异步action方式
export const changeSongPlayerAction = (tag) => {
  return (dispatch, getState) => {
    const playList = getState().getIn(["player", "playList"]);
    const sequence = getState().getIn(["player", "sequence"]);
    let currentSongIndex = getState().getIn(["player", "currentSongIndex"]);
    switch (sequence) {
      case 1: // 随机播放
        let randomIndex = getRandomNumber(playList.length);
        while (randomIndex === currentSongIndex) {
          randomIndex = getRandomNumber(playList.length);
        }
        currentSongIndex = randomIndex;
        break;
      default:
        // 其他播放
        currentSongIndex += tag;
        if (currentSongIndex >= playList.length) currentSongIndex = 0;
        if (currentSongIndex < 0) currentSongIndex = playList.length - 1;
        break;
    }
    const currentSong = playList[currentSongIndex];
    dispatch(changeCurrentSongAction(currentSong));
    dispatch(changeCurrentSongIndexAction(currentSongIndex));

    // 请求该歌曲的歌词
    dispatch(getLyricAction(currentSong.id));
  };
};

// 添加歌曲/第一次打开页面时，获取歌曲信息
export const getSongDetailAction = (idx) => {
  return (dispatch, getState) => {
    // 1.根据ids查找playList中是否已经有该歌曲
    const playList = getState().getIn(["player", "playList"]);
    const songIndex = playList.findIndex((item) => item.id === idx);

    // 2.判断是否找到歌曲
    // 如果返回的是大于0的下标，则表明找到了。
    if (songIndex !== -1) {
      dispatch(changeCurrentSongIndexAction(songIndex));
      const song = playList[songIndex];
      console.log(song);
      dispatch(changeCurrentSongAction(song));

      // 3 请求该歌曲的歌词
      dispatch(getLyricAction(song.id));
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

        // 3 请求该歌曲的歌词
        dispatch(getLyricAction(song.id));
      });
    }
  };
};

// 对应 id 的获取歌词
export const getLyricAction = (id) => {
  return (dispatch) => {
    getLyric(id).then((res) => {
      console.log(res);
    });
  };
};
