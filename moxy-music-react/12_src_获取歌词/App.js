import React, { memo } from "react";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";

// 第三方导入
import routes from "./router";
import store from "./store";

// 组件导入
import LJAppHeader from "@/components/app-header";
import LJAppFooter from "@/components/app-footer";
import LJAppPlayBar from "@/pages/player/app-player-bar";

export default memo(function App() {
  return (
    // 共享 store
    <Provider store={store}>
      <HashRouter>
        <LJAppHeader />
        {renderRoutes(routes)}
        <LJAppFooter />
        <LJAppPlayBar />
      </HashRouter>
    </Provider>
  );
});
