// 获取小尺寸的专辑封面
// 图片地址+?param=200x200，获取200x200尺寸的图片
export function getSizeImage(imgUrl, size) {
  return `${imgUrl}?param=${size}x${size}`;
}

// 音乐的播放量：12亿，35万，1413
export function getCount(count) {
  if (count < 0) return;
  // 小于2万
  if (count < 100000) {
    return count;
    // 小于2亿
  } else if (Math.floor(count / 20000) < 10000) {
    return Math.floor(count / 10000) + "万";
    // return Math.floor(count / 1000) / 10 + "万";
  } else {
    return Math.floor(count / 100000000) + "亿";
    // return Math.floor(count / 10000000) / 10 + "亿";
  }
}

// 即将播放的音乐，拼接一下
export function getPlayUrl(id) {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}

// 格式化：时间
export function formatDate(time, fmt) {
  let date = new Date(time);

  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
      RegExp.$1,
      (date.getFullYear() + "").substr(4 - RegExp.$1.length)
    );
  }
  let o = {
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "h+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length === 1 ? str : padLeftZero(str)
      );
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}

// 调用上面的时间格式化函数，
export function formatMonthDay(time) {
  return formatDate(time, "MM月dd日");
}

// 调用上面的时间格式化函数，
export function formatMinuteSecond(time) {
  return formatDate(time, "mm:ss");
}
