import React, { memo } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import classNames from "classnames";

import { artistCategories } from "@/common/local-data";

import {
  changeCurrentAreaAction,
  changeCurrentTypeAction,
} from "../../store/actionCreators";

import { CategoryWrapper, CategoryItem } from "./style";
export default memo(function LJArtistCategory() {
  // redux hooks
  const { currentArea, currentType } = useSelector(
    (state) => ({
      currentArea: state.getIn(["artist", "currentArea"]),
      currentType: state.getIn(["artist", "currentType"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // handle function
  const selectArtist = (area, type) => {
    dispatch(changeCurrentAreaAction(area));
    dispatch(changeCurrentTypeAction(type));
  };

  // 用一个高阶函数，把每个大类中的小类提取了出来
  const renderArtist = (artists, area) => {
    return (
      <div>
        {artists.map((item, index) => {
          // 判断是否被选中，要大类area和小类type都相符合。
          const isSelect =
            currentArea === area && currentType.type === item.type;
          return (
            <CategoryItem
              key={item.name}
              className={classNames({ active: isSelect })}
            >
              {/* 如果选中后，就会dispatch area & type，从而让list组件获取详细歌手数据 */}
              <span onClick={(e) => selectArtist(area, item)}>{item.name}</span>
            </CategoryItem>
          );
        })}
      </div>
    );
  };

  return (
    <CategoryWrapper>
      {/* 左侧导航的数据是本地提前保存的，直接拿来用。 */}
      {artistCategories.map((item, index) => {
        return (
          <div className="section" key={item.area}>
            <h2 className="title">{item.title}</h2>
            {renderArtist(item.artists, item.area)}
          </div>
        );
      })}
    </CategoryWrapper>
  );
});
