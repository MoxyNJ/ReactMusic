import * as actionTypes from "./constants";

import {
  getTopBanners,
  getHotRecommends,
  getNewAlbum,
  getTopList,
  getArtistList,
} from "@/services/recommend";

// 更新组件的 Banner 信息
const changeTopBannerAction = (res) => ({
  type: actionTypes.CHANGE_TOP_BANNERS,
  topBanners: res.banners,
});

// 更新组件的 hot recommends 信息
const changeHotRecommendsAction = (res) => ({
  type: actionTypes.CHANGE_HOT_RECOMMENDS,
  hotRecommends: res.result,
});

const changeNewAlbumsAction = (res) => ({
  type: actionTypes.CHANGE_NEW_ALBUMS,
  newAlbums: res.albums,
});

const changeUpRankingListAction = (res) => ({
  type: actionTypes.CHANGE_UP_RANKING_LIST,
  upRankingList: res.playlist,
});
const changeNewRankingListAction = (res) => ({
  type: actionTypes.CHANGE_NEW_RANKING_LIST,
  newRankingList: res.playlist,
});
const changeOrgRankingListAction = (res) => ({
  type: actionTypes.CHANGE_ORG_RANKING_LIST,
  orgRankingList: res.playlist,
});

const changeSettleSingersAction = (res) => ({
  type: actionTypes.CHANGE_SETTLE_SINGERS,
  settleSingers: res.artists,
});

// const changeHotRadiosAction = (res) => ({
//   type: actionTypes.CHANGE_HOT_RADIOS,
//   hotRadios: res,
// });

// const changeUserLoginAction = (res) => ({
//   type: actionTypes.CHANGE_USER_LOGIN,
//   userLogin: res,
// });

// 从网络异步获取 Banner 信息
export const getTopBannerAction = () => {
  return (dispatch) => {
    getTopBanners().then((res) => {
      dispatch(changeTopBannerAction(res));
    });
  };
};

// 从网络异步获取 hot recommends 信息
export const getHotRecommendsAction = (limit) => {
  return (dispatch) => {
    getHotRecommends(limit).then((res) => {
      dispatch(changeHotRecommendsAction(res));
    });
  };
};

// 从网络异步获取 new Album 信息
export const getNewAlbumsAction = (limit) => {
  return (dispatch) => {
    getNewAlbum(limit).then((res) => {
      dispatch(changeNewAlbumsAction(res));
    });
  };
};

// 从网络异步获取 ranking list 信息
export const getRankingListAction = (id) => {
  return (dispatch) => {
    getTopList(id).then((res) => {
      switch (id) {
        case 19723756:
          dispatch(changeNewRankingListAction(res));
          break;
        case 3779629:
          dispatch(changeOrgRankingListAction(res));
          break;
        case 2884035:
          dispatch(changeUpRankingListAction(res));
          break;
        default:
      }
    });
  };
};

// 从网络异步获取 settle singer 信息
export const getSettleSingersAction = (limit) => {
  return (dispatch) => {
    getArtistList(5, 5001).then((res) => {
      dispatch(changeSettleSingersAction(res));
    });
  };
};

// // 从网络异步获取 hot radio 信息
// export const getHotRadiosAction = (limit) => {
//   return (dispatch) => {
//     getHotRadio(limit).then((res) => {
//       dispatch(changeHotRadiosAction(res));
//     });
//   };
// };

// // 从网络异步获取 user login 信息
// export const getUserLoginAction = (limit) => {
//   return (dispatch) => {
//     getUserLogin(limit).then((res) => {
//       dispatch(changeUserLoginAction(res));
//     });
//   };
// };
