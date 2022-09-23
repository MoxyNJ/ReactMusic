import request from "./request";

// 轮播图
export function getTopBanners() {
  return request({
    url: "/banner",
  });
}

// 热门推荐
export function getHotRecommends(limit) {
  return request({
    // url: "/personalized?limit=8",
    url: "/personalized",
    params: {
      limit,
    },
  });
}

//新碟上架
export function getNewAlbum(limit, offset) {
  return request({
    url: "/album/new",
    params: {
      limit,
      offset,
    },
  });
}

// 榜单
export function getTopList(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id,
    },
  });
}

// 入住歌手
export function getArtistList(limit, cat) {
  return request({
    url: "/artist/list",
    params: {
      cat,
      limit,
    },
  });
}

// 热门主播
