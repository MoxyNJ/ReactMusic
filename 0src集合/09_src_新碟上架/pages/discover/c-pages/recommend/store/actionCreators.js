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

// const changeHotRadiosAction = (res) => ({
//   type: actionTypes.CHANGE_HOT_RADIOS,
//   newAlbums: res,
// });

// const changeRankingListAction = (res) => ({
//   type: actionTypes.CHANGE_RANKING_LIST,
//   newAlbums: res,
// });

// const changeSettleSingersAction = (res) => ({
//   type: actionTypes.CHANGE_SETTLE_SINGERS,
//   newAlbums: res,
// });

// const changeUserLoginAction = (res) => ({
//   type: actionTypes.CHANGE_USER_LOGIN,
//   newAlbums: res,
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

// // 从网络异步获取 hot radio 信息
// export const getHotRadiosAction = (limit) => {
//   return (dispatch) => {
//     getHotRadio(limit).then((res) => {
//       dispatch(changeHotRadiosAction(res));
//     });
//   };
// };

// // 从网络异步获取 ranking list 信息
// export const getRankingListAction = (limit) => {
//   return (dispatch) => {
//     getRankingList(limit).then((res) => {
//       dispatch(changeRankingListAction(res));
//     });
//   };
// };

// // 从网络异步获取 settle singer 信息
// export const getSettleSingersAction = (limit) => {
//   return (dispatch) => {
//     getSettleSingers(limit).then((res) => {
//       dispatch(changeSettleSingersAction(res));
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
