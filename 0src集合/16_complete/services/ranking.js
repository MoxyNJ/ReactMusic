import request from "./request";

// 获取榜单的名称
export function getListTitle() {
  return request({
    url: "/toplist",
  });
}

// 获取榜单详情
export function getRankingList(id) {
  return request({
    url: "/playlist/detail",
    params: {
      id,
    },
  });
}
