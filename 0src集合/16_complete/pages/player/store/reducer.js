import { Map } from "immutable";
import * as actionTypes from "./constants";
import { DEFAULT_PLAY_LIST, INIT_VOLUME } from "@/common/contants";

const defaultState = Map({
  playList: [...DEFAULT_PLAY_LIST],
  currentSongIndex: 0,
  currentSong: {},
  sequence: 0,
  lyricList: [], // 0 循环播放、 1随机、2单曲
  currentLyricIndex: 0,
  volume: INIT_VOLUME,
  simiPlaylist: [],
  simiSongs: [],
});

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set("currentSong", action.currentSong);
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set("playList", action.playList);
    case actionTypes.CHANGE_CURRENT_SONG_INDEX:
      return state.set("currentSongIndex", action.index);
    case actionTypes.CHANGE_SEQUENCE:
      return state.set("sequence", action.sequence);
    case actionTypes.CHANGE_LYRIC_LIST:
      return state.set("lyricList", action.lyricList);
    case actionTypes.CHANGE_CURRENT_LYRIC_INDEX:
      return state.set("currentLyricIndex", action.currentLyricIndex);
    case actionTypes.CHANGE_PLAYER_VOLUME:
      return state.set("volume", action.volume);
    case actionTypes.CHANGE_SIMI_PLAYLIST:
      return state.set("simiPlaylist", action.simiPlaylist);
    case actionTypes.CHANGE_SIMI_SONGS:
      return state.set("simiSongs", action.simiSongs);
    default:
      return state;
  }
}

export default reducer;
