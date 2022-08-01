import React, { memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import {
  changeCurrentCategoryAction,
  getSongCategoryListAction,
} from "../../store/actionCreators";

import { SongsCategoryWrapper } from "./style";

export default memo(function LJSongsCategory() {
  // redux hooks
  const { category } = useSelector(
    (state) => ({
      category: state.getIn(["songList", "category"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // other handle
  // 当点击风格名称后:
  //   1. 改变CurrentCategory名称，
  //   2. 改变下方展示的内容，展示最开始的第"0"页。
  const selectCategory = (name) => {
    dispatch(changeCurrentCategoryAction(name));
    dispatch(getSongCategoryListAction(0));
  };

  return (
    <SongsCategoryWrapper>
      <div className="arrow sprite_icon"></div>
      <div className="all">
        <span className="link" onClick={(e) => selectCategory("全部")}>
          全部风格
        </span>
      </div>
      <div className="category">
        {category.map((item, index) => {
          return (
            <dl key={item.name} className={"item" + index}>
              <dt>
                <i className="icon sprite_icon2"></i>
                <span>{item.name}</span>
              </dt>
              <dd>
                {item.subs.map((value) => {
                  return (
                    <div className="item" key={value.name}>
                      <span
                        className="link"
                        onClick={(e) => selectCategory(value.name)}
                      >
                        {value.name}
                      </span>
                      <span className="divider">|</span>
                    </div>
                  );
                })}
              </dd>
            </dl>
          );
        })}
      </div>
    </SongsCategoryWrapper>
  );
});
