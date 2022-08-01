import request from "./request";

// 变量：地区大类、歌手小类、第n页（ABC）
// 变量：  area 、  type 、initial

/** 地区大类：
 * -1 推荐
 *  7 华语
 * 96 欧美
 *  8 日本
 * 16 韩国
 *  0 其他
 * **/

export function getArtistList(area, type, initial) {
  let url = "/artist/list";
  let params = { limit: 100 };
  if (area === -1 && type === 1) {
    url = "/top/artists";
  } else {
    if (area === -1) {
      params = { limit: 100, cat: 5001 };
    } else {
      params = {
        type,
        area,
        initial,
        limit: 100,
      };
    }
  }

  //  console.log("url:", url, "params:", params);
  return request({
    url,
    params,
  });
}
