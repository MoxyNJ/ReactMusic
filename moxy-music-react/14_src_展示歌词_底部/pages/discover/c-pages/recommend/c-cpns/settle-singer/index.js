import React, { memo, useEffect } from "react";
import { useDispatch, shallowEqual, useSelector } from "react-redux";

import LJThemeHeaderSettleSinger from "@/components/theme-header-settle-singer";

import { getSettleSingersAction } from "../../store/actionCreators";
import { getSizeImage } from "@/utils/format-utils";
import { SetterSongerWrapper } from "./style";

export default memo(function LJSettleSinger() {
  // redux hook
  const dispatch = useDispatch();
  const { settleSingers } = useSelector(
    (state) => ({
      settleSingers: state.getIn(["recommend", "settleSingers"]),
    }),
    shallowEqual
  );

  // react hook
  useEffect(() => {
    dispatch(getSettleSingersAction());
  }, [dispatch]);

  return (
    <div>
      <SetterSongerWrapper>
        <LJThemeHeaderSettleSinger title="入驻歌手" moreInfo="查看全部>" />
        <div className="singer-list">
          {settleSingers.map((item, index) => {
            return (
              <a key={item.id} href="/todo" className="item">
                <img src={getSizeImage(item.img1v1Url, 62)} alt={item.name} />
                <div className="info">
                  <div className="title">
                    {item.alias[0] ? item.alias[0] : item.name}
                  </div>
                  <div className="name">{item.name}</div>
                </div>
              </a>
            );
          })}
        </div>
        <div className="apply-for">
          <a href="/todo" className="sprite_button">
            <i className="sprite_button">申请成为网易音乐人</i>
          </a>
        </div>
      </SetterSongerWrapper>
    </div>
  );
});
