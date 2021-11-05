import {
  getDjRadioCatelist,
  getDjRadioRecommend,
  getDjRadios,
} from "@/services/djradio";
import * as actionTypes from "./constants";

// 电台类目
const changeCategoryAction = (res) => ({
  type: actionTypes.CHANGE_RADIO_CATEGORY,
  categories: res.categories,
});

// 优秀新电台 - 推荐
const changeRecommendsAction = (res) => ({
  type: actionTypes.CHANGE_RECOMMENDS,
  recommends: res.djRadios,
});

// 电台排行榜
const changeRadiosAction = (res) => ({
  type: actionTypes.CHANGE_RADIOS,
  radios: res.djRadios,
});

// 当前类名
export const changeCurrentIdAction = (id) => ({
  type: actionTypes.CHANGE_CURRENT_ID,
  currentId: id,
});

// 1 电台全部类目
export const getRadioCategories = () => {
  return (dispatch) => {
    getDjRadioCatelist().then((res) => {
      // 暂时额外再加两个假数据
      const categories = res.categories;
      const add1 = { ...categories[categories.length - 2] };
      const add2 = { ...categories[categories.length - 1] };
      add1.name = "常见问题";
      add1.picWebUrl =
        "https://music.163.com/style/web2/img/index_radio/radio_faq.png";
      add2.name = "我要做主播";
      add2.picWebUrl =
        "https://music.163.com/style/web2/img/index_radio/radio_apply.png";
      res.categories.push(add1, add2);

      // 添加两个数据后，再正常的派发
      dispatch(changeCategoryAction(res));
      const currentId = res.categories[0].id;
      dispatch(changeCurrentIdAction(currentId));
    });
  };
};

// 2 电台推荐、优秀新电台
export const getRadioRecommend = (currentId) => {
  return (dispatch) => {
    getDjRadioRecommend(currentId).then((res) => {
      dispatch(changeRecommendsAction(res));
    });
  };
};

// 3 电台排行榜、全部内容
export const getRadios = (currentId, offset) => {
  return (dispatch) => {
    getDjRadios(currentId, 30, offset).then((res) => {
      dispatch(changeRadiosAction(res));
    });
  };
};
