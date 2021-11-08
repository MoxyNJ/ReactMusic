import React, { memo, Suspense, useState } from "react";
import { renderRoutes } from "react-router-config";
import { HashRouter } from "react-router-dom";

// 第三方导入
import routes from "@/router";

// 组件导入
import LJAppHeader from "@/components/app-header";
import LJAppFooter from "@/components/app-footer";
import LJAppPlayBar from "@/pages/player/app-player-bar";

export default memo(function LJMain() {
  // 显示/隐藏底部的bar
  //     visibility: hidden;
  const [showVolumn, setShowVolumn] = useState(false);
  const [showPannel, setShowPannel] = useState(false);
  const volumnHandle = { showVolumn, setShowVolumn };
  const pannelHandle = { showPannel, setShowPannel };

  // handle func
  const handleShow = () => {
    setShowVolumn(false);
    setShowPannel(false);
  };

  return (
    <HashRouter>
      <div onClick={(e) => handleShow()}>
        <LJAppHeader />
        <Suspense fallback={<h2>Page Loading...</h2>}>
          {renderRoutes(routes)}
        </Suspense>
        <LJAppFooter />
      </div>
      <LJAppPlayBar volumnHandle={volumnHandle} pannelHandle={pannelHandle} />
    </HashRouter>
  );
});
