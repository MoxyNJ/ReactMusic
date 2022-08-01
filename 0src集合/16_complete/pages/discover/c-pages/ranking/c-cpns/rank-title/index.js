import React, { memo, useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import classNames from "classnames";

import { getSizeImage } from "@/utils/format-utils";

import {
  changeCurrentIndexAction,
  getRankingAction,
} from "../../store/actionCreators";

import { RankTitleWrapper } from "./style";

export default memo(function LJRanking() {
  // redux hooks
  const { listTitle, currentIndex } = useSelector(
    (state) => ({
      listTitle: state.getIn(["ranking", "listTitle"]),
      currentIndex: state.getIn(["ranking", "currentIndex"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // react hooks
  useEffect(() => {
    const id = listTitle[currentIndex] && listTitle[currentIndex].id;
    if (!id) return;
    dispatch(getRankingAction(id));
  }, [dispatch, listTitle, currentIndex]);

  // handle functions
  // 点击榜单后，会在 header 和 list 展示对应的榜单信息
  // 保存：当前打开的榜单：下标 currentIndex、名称 listTitle
  const handleItemClick = (index) => {
    dispatch(changeCurrentIndexAction(index));
    const id = listTitle[currentIndex].id;
    dispatch(getRankingAction(id));
  };

  return (
    <RankTitleWrapper>
      {listTitle.map((item, index) => {
        // 前四个和后面的分别是两组，各组需要添加一个标题名
        const header = ["云音乐特色榜", "全球媒体榜"];
        let listClassification;
        if (index === 0 || index === 4) {
          listClassification = (
            <h2 className="header">{index === 0 ? header[0] : header[1]}</h2>
          );
        }

        return (
          <div key={item.id}>
            {listClassification}
            <div
              className={classNames("item", { active: index === currentIndex })}
              onClick={(e) => handleItemClick(index)}
            >
              <img src={getSizeImage(item.coverImgUrl, 40)} alt={item.name} />
              <div className="info">
                <div className="title">{item.name}</div>
                <div className="time">{item.updateFrequency}</div>
              </div>
            </div>
          </div>
        );
      })}
    </RankTitleWrapper>
  );
});
