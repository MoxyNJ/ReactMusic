import request from "./request";

// 按照页面的顺序从上至下
// 1 电台栏目
export function getDjRadioCatelist() {
  return request({
    url: "/dj/catelist",
  });
}

// 2 优秀新电台
export function getDjRadioRecommend(type) {
  return request({
    url: "/dj/recommend/type",
    params: {
      type,
    },
  });
}

// 3 电台排行榜
export function getDjRadios(cateId, limit, offset) {
  return request({
    url: "/dj/radio/hot",
    params: {
      cateId,
      limit,
      offset,
    },
  });
}
