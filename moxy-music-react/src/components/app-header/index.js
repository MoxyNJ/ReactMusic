import React, { memo } from "react";
import { NavLink } from "react-router-dom";

// 组件相关
import { headerLinks } from "@/common/local-data";
import { HeaderWrapper, HeaderLeft, HeaderRight } from "./style";

export default memo(function LJAppHeader() {
  // 业务代码
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return <NavLink to={item.link}>{item.title}</NavLink>;
    } else {
      return <a href={item.link}>{item.title}</a>;
    }
  };

  // 返回的jsx
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#/" className="logo sprite_01"></a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div key={item.title} className="select-item">
                  {showSelectItem(item, index)}
                </div>
              );
            })}
          </div>
        </HeaderLeft>
        <HeaderRight>Right</HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  );
});
