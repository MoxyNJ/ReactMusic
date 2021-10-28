import React, { memo, useEffect } from "react";

import { connect } from "react-redux";

import { getTopBannerAction } from "./store/actionCreators";

function LJRecommend(props) {
  const { getBanners, topBanners } = props;

  useEffect(() => {
    getBanners();
  }, [getBanners]);

  return (
    <div>
      <h2>LJRecommend</h2>
      <h2>{topBanners.length} </h2>
    </div>
  );
}

// 拿到的是最外层的state，store中全部的state
const mapStateToProps = (state) => ({
  topBanners: state.recommend.topBanners,
});

// 拿到了store的dispatch方法
const mapDispatchToProps = (dispatch) => ({
  getBanners: () => {
    dispatch(getTopBannerAction());
  },
});

// 最终渲染的是这个组件，这个组件内部包含了LJRecommend组件
// 每次重新渲染LJRecommend，实际上是先渲染下面这个组件
// 下面这个组件一旦渲染，mapStateToProps 和 mapDispatchToProps 会重新获取
// 为什么要重新获取？因为要保持state和dispatch的数据最新
// 重新获取后，mapDispatchToProps中的getBanners就发生改变
// getBanners就发生改变后，useEffect内的代码就会被执行
// 代码被执行后，就会调用异步Action，获取topBanners的数据
// 获取到数据后，就会dispatch更新到stroe中。
export default connect(mapStateToProps, mapDispatchToProps)(memo(LJRecommend));
