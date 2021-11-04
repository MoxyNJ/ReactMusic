import request from "./request";

// 获取：热门新碟
export function getHotAlbums() {
  return request({
    url: "/album/newest",
  });
}

// 获取：全部新碟
export function getTopAlbums(limit, offset) {
  return request({
    url: "/top/album",
    params: {
      limit,
      offset,
    },
  });
}
