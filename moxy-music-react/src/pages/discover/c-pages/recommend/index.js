import React, { memo, useEffect } from "react";

import { useDispatch, useSelector, shallowEqual } from "react-redux";

import { getTopBannerAction } from "./store/actionCreators";

function LJRecommend(props) {
  // 利用 redux hooks
  // 组件和redux关联：获取数据state和操作的XXXAction

  // ---- 24课：02：10：00
  // 拿到stata方式
  // 两个参数：回调函数 +
  // ---- 回调函数
  // ---- 回调函数有一个参数 state，就是store的全部state
  // ---- 这个回调函数会有一个返回值，这个返回值会赋值给左侧的变量 *里面*。
  // ---- 左侧变量接内接受到这个属性，然后通过解构赋值，直接拿到。
  // ----
  // ---- 性能优化
  // ---- connect的mapStateToProps会把state和组件形成依赖，进而如果依赖的数据没有改变，这个组件也不会被重新渲染，节约开销
  // ---- 但是使用useSelector如果只传入第一个参数，就不会有这种浅对比，只要有state发生变化，就会重新渲染组件。
  // ---- useSelector使用的是“===”来比较，但是每次返回的有state的对象，都是新创建的，所以一定不相等，一定会重新渲染。
  // ---- 解决方案：shallowEqual的引入
  // ---- 直接传入 shallowEqual 为第二个参数即可。
  // ----
  // ----
  const { topBanners } = useSelector(
    (state) => ({
      topBanners: state.recommend.get("topBanners"),
    }),
    shallowEqual
  );

  // 拿到dispatch方式
  const dispatch = useDispatch();

  // 发送网络请求
  // 依赖：一般不会发生dispatth改变，但保险起见，加上依赖。
  // ------ 因为dispatch发生改变，需要页面重新渲染
  useEffect(() => {
    console.log(dispatch);
    dispatch(getTopBannerAction());
  }, [dispatch]);

  return (
    <div>
      <h2>LJRecommend</h2>
      <h2>{topBanners.length}</h2>
    </div>
  );
}

export default memo(LJRecommend);
