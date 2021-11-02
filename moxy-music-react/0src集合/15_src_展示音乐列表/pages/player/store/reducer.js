import { Map } from "immutable";
import * as actionTypes from "./constants";

const defaultState = Map({
  playList: [
    {
      name: "Something Just Like This",
      id: 461347998,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 893484,
          name: "The Chainsmokers",
          tns: [],
          alias: [],
        },
        {
          id: 89365,
          name: "Coldplay",
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: null,
      fee: 8,
      v: 101,
      crbt: null,
      cf: "",
      al: {
        id: 35196287,
        name: "Something Just Like This",
        picUrl:
          "https://p1.music.126.net/A59-h_qsGXsq0wDbGVPNbg==/109951165981250182.jpg",
        tns: [],
        pic_str: "109951165981250182",
        pic: 109951165981250180,
      },
      dt: 247626,
      h: {
        br: 320000,
        fid: 0,
        size: 9907766,
        vd: -66440,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5944677,
        vd: -66440,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3963133,
        vd: -66440,
      },
      a: null,
      cd: "1",
      no: 1,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 1,
      s_id: 0,
      mark: 270336,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 101,
      songJumpInfo: null,
      single: 0,
      noCopyrightRcmd: null,
      rurl: null,
      mv: 5449021,
      mst: 9,
      cp: 7001,
      rtype: 0,
      publishTime: 1487952000000,
    },
    {
      name: "Unstoppable",
      id: 400876320,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 74625,
          name: "Sia",
          tns: [],
          alias: [],
        },
      ],
      alia: [],
      pop: 100,
      st: 0,
      rt: null,
      fee: 8,
      v: 33,
      crbt: null,
      cf: "",
      al: {
        id: 3394107,
        name: "This Is Acting",
        picUrl:
          "https://p1.music.126.net/zmDE8IMf0QKDLVQc1xh4RA==/109951165973312283.jpg",
        tns: [],
        pic_str: "109951165973312283",
        pic: 109951165973312290,
      },
      dt: 217808,
      h: {
        br: 320000,
        fid: 0,
        size: 8712403,
        vd: -66479,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5227459,
        vd: -64026,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3484987,
        vd: -62608,
      },
      a: null,
      cd: "1",
      no: 5,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 1,
      s_id: 0,
      mark: 270336,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 33,
      songJumpInfo: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 7001,
      mv: 0,
      publishTime: 1453996800000,
    },
    {
      name: "Happy",
      id: 26548584,
      pst: 0,
      t: 0,
      ar: [
        {
          id: 41151,
          name: "Pharrell Williams",
          tns: [],
          alias: [],
        },
      ],
      alia: ["电影《神偷奶爸2》插曲"],
      pop: 100,
      st: 0,
      rt: "",
      fee: 8,
      v: 178,
      crbt: null,
      cf: "",
      al: {
        id: 2522067,
        name: "Despicable Me 2 (Original Motion Picture Soundtrack)",
        picUrl:
          "https://p2.music.126.net/CiZTgd1Frwf6dgVJIJxLfA==/109951164724862545.jpg",
        tns: ["神偷奶爸2"],
        pic_str: "109951164724862545",
        pic: 109951164724862540,
      },
      dt: 233305,
      h: {
        br: 320000,
        fid: 0,
        size: 9335162,
        vd: -44875,
      },
      m: {
        br: 192000,
        fid: 0,
        size: 5601115,
        vd: -42343,
      },
      l: {
        br: 128000,
        fid: 0,
        size: 3734091,
        vd: -40749,
      },
      a: null,
      cd: "1",
      no: 4,
      rtUrl: null,
      ftype: 0,
      rtUrls: [],
      djId: 0,
      copyright: 1,
      s_id: 0,
      mark: 270464,
      originCoverType: 1,
      originSongSimpleData: null,
      tagPicList: null,
      resourceState: true,
      version: 178,
      songJumpInfo: null,
      single: 0,
      noCopyrightRcmd: null,
      rtype: 0,
      rurl: null,
      mst: 9,
      cp: 743010,
      mv: 206025,
      publishTime: 1371484800007,
    },
  ],
  currentSongIndex: 0,
  currentSong: {},
  sequence: 0,
  lyricList: [], // 0 循环播放、 1随机、2单曲
  currentLyricIndex: 0,
  volume: 0,
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
    default:
      return state;
  }
}

export default reducer;
