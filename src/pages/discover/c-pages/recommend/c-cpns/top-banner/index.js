import React, { memo, useEffect, useRef, useCallback, useState } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { getTopBannerAction } from "../../store/actionCreators";

// 组件导入
import { Carousel } from "antd";
import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from "./style";

export default memo(function LJTopBanner() {
    // state
    // 模糊图的下标
    const [currentIndex, setCurrentIndex] = useState(0);

    // redux 相关的内容 + hooks
    // 拿到state
    const { topBanners } = useSelector(
        (state) => ({
            // topBanners: state.get("recommend").get("topBanners"),
            topBanners: state.getIn(["recommend", "topBanners"]),
        }),
        shallowEqual
    );

    // 拿到dispatch
    const dispatch = useDispatch();

    // 控制左右翻页
    const bannerRef = useRef();

    // 发送网络请求
    useEffect(() => {
        dispatch(getTopBannerAction());
    }, [dispatch]);

    // 背景模糊图
    // 使用 useCallback，防止该回调函数每次组件渲染都重定义
    const bannerChange = useCallback((from, to) => {
        // 根据API自身携带了 from 和 to 这两个参数
        // console.log(to)
        setCurrentIndex(to);
    }, []);

    // 其他业务逻辑
    // 防止 topBanners 最开始的时候拿不到数据，先判断一下是否有数据：topBanners[currentIndex]
    // 如果有数据，就那其中的 imageURL，如果没数据，就拿到了一个 undefined。
    const bgImage = topBanners && topBanners.length && topBanners[currentIndex] && topBanners[currentIndex]?.imageUrl + "?imageView&blur=40x20";

    return (
        <BannerWrapper bgImage={bgImage}>
            <div className="banner wrap-v2">
                <BannerLeft>
                    <Carousel effect="fade" autoplay ref={bannerRef} beforeChange={bannerChange} dots={{ className: "dots" }}>
                        {topBanners?.map((item, index) => {
                            return (
                                <div className="banner-item" key={item.imageUrl}>
                                    <img className="image" src={item.imageUrl} alt={item.topTitle} />
                                </div>
                            );
                        })}
                    </Carousel>
                </BannerLeft>
                <BannerRight>
                    <div className="SignInInfo">PC 安卓 iPhone WP iPad Mac 六大客户端</div>
                </BannerRight>
                <BannerControl>
                    <button className="btn left" onClick={(e) => bannerRef.current.prev()}></button>
                    <button className="btn right" onClick={(e) => bannerRef.current.next()}></button>
                </BannerControl>
            </div>
        </BannerWrapper>
    );
});
