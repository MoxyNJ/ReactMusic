import React, { memo } from "react";
import { renderRoutes } from "react-router-config";

import { dicoverMenu } from "@/common/local-data";

import { NavLink } from "react-router-dom";
import { DiscoverWrapper, TopMenu } from "./style";

export default memo(function LJDiscover(props) {
  // LJDiscover会把它自身的route属性传递到 props 上、
  // 直接从 props 上获取到子路由的route规则
  const { route } = props;

  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {dicoverMenu.map((item, index) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            );
          })}
        </TopMenu>
      </div>
      {/* route.routers就是所需的route规则 */}
      {renderRoutes(route.routes)}
    </DiscoverWrapper>
  );
});
