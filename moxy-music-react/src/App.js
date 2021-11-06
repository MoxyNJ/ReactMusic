import React from "react";
import { Provider } from "react-redux";

// 第三方导入
import store from "./store";

import LJMain from "./pages/main";

function App() {
  return (
    // 共享 store
    <Provider store={store}>
      <LJMain />
    </Provider>
  );
}

export default App;
