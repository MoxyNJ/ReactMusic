import React, { memo, useEffect } from "react";
import { renderRoutes } from "react-router-config";

import { dicoverMenu } from "@/common/local-data";
import request from "@/services/request";

import { NavLink } from "react-router-dom";
import { DiscoverWrapper, TopMenu } from "./style";

export default memo(function LJDiscover(props) {
  useEffect(() => {
    request({
      url: "/banner",
    }).then((res) => {
      console.log(res);
    });
  }, []);

  // Discpver组件会接收到一个props，
  // 会把它自身的route属性传递过来
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
