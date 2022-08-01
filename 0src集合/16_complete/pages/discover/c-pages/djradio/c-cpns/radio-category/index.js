import React, { useEffect, useRef, memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";
import classnames from "classnames";

import { DJ_RADIO_CATE_NUMBER } from "@/common/contants";
import {
  getRadioCategories,
  changeCurrentIdAction,
} from "../../store/actionCreators";

import { Carousel } from "antd";
import { CategoryWrapper, CategoryContent, CategoryItemImage } from "./style";

export default memo(function LJRadioCategory() {
  // redux hooks
  const dispatch = useDispatch();
  const { categories = [], currentId = 0 } = useSelector(
    (state) => ({
      categories: state.getIn(["djRadio", "categories"]),
      currentId: state.getIn(["djRadio", "currentId"]),
    }),
    shallowEqual
  );

  // react hooks
  useEffect(() => {
    dispatch(getRadioCategories());
  }, [dispatch]);
  const carouselRef = useRef();

  // handle function

  // 计算出共有几页，每页应当有18个类目
  // ceil 向下取整
  const page = Math.ceil(categories.length / DJ_RADIO_CATE_NUMBER) || 1;

  return (
    <CategoryWrapper>
      <div
        className="arrow arrow-left"
        onClick={(e) => carouselRef.current.prev()}
      ></div>
      <CategoryContent>
        <Carousel dots={{ className: "dots" }} ref={carouselRef}>
          {Array(page)
            .fill(0)
            .map((_, index) => {
              return (
                <div key={index} className="category-page">
                  {/* slice: 0,18 , 18,length */}
                  {categories
                    .slice(
                      index * DJ_RADIO_CATE_NUMBER,
                      index === 0 ? 18 : categories.length
                    )
                    .map((item, index) => {
                      return (
                        <div
                          key={item.id}
                          onClick={(e) =>
                            dispatch(changeCurrentIdAction(item.id))
                          }
                          className={classnames("category-item", {
                            active: currentId === item.id,
                          })}
                        >
                          <CategoryItemImage
                            className="image"
                            imgUrl={item.picWebUrl}
                          ></CategoryItemImage>
                          <span>{item.name}</span>
                        </div>
                      );
                    })}
                </div>
              );
            })}
        </Carousel>
      </CategoryContent>
      <div
        className="arrow arrow-right"
        onClick={(e) => carouselRef.current.next()}
      ></div>
    </CategoryWrapper>
  );
});
