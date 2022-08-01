import React, { memo } from "react";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";

// 第三方导入
import routers from "./router";

// 组件导入
import LJAppHeader from "@/components/app-header";
import LJAppFooter from "@/components/app-footer";

export default memo(function App() {
  return (
    <HashRouter>
      <LJAppHeader />
      {renderRoutes(routers)}
      <LJAppFooter />
    </HashRouter>
  );
});
