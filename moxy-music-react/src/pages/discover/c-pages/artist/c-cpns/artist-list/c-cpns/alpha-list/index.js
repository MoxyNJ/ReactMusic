import React, { memo, useState, useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import classNames from "classnames";

import { singerAlphas } from "@/utils/handle-data";
import { getArtistListAction } from "../../../../store/actionCreators";

import { AlphaListWrapper } from "./style";
export default memo(function LJAlphaList() {
  // props & state
  const [currentAlpha, setCurrentAlpha] = useState("-1");

  // redux hooks
  const { currentType, currentArea } = useSelector(
    (state) => ({
      currentType: state.getIn(["artist", "currentType"]),
      currentArea: state.getIn(["artist", "currentArea"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // react hooks
  // 初始化时，默认打开 “全部” 类目
  useEffect(() => {
    setCurrentAlpha("-1");
  }, [currentType]);

  useEffect(() => {
    dispatch(getArtistListAction(currentArea, currentType.type, currentAlpha));
  }, [currentAlpha, currentType, currentArea, dispatch]);

  return (
    <AlphaListWrapper hasTop={currentArea !== -1}>
      {currentArea !== -1 &&
        singerAlphas.map((item, index) => {
          const isActive = currentAlpha === item;
          return (
            <div
              key={index}
              className={classNames("item", { active: isActive })}
            >
              <span
                onClick={(e) => setCurrentAlpha(item)}
                className={classNames({
                  small: item === "-1" || item === "0",
                })}
              >
                {/* 使用立即执行箭头函数，可以在jsx中用switch */}
                {(() => {
                  switch (item) {
                    case "-1":
                      return "热门";
                    case "0":
                      return "其他";
                    default:
                      return item.toUpperCase();
                  }
                })()}
              </span>
            </div>
          );
        })}
    </AlphaListWrapper>
  );
});
