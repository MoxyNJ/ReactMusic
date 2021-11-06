import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";

import LJSongsCategory from "../songs-category";

import {
  SongsHeaderWrapper,
  HeaderLeftWrapper,
  HeaderRightWrapper,
} from "./style";
export default memo(function LJSongsHeader(props) {
  // props
  // const [showCategory, setShowCategory] = useState(false);
  const { showCategory, setShowCategory } = props;

  // redux hooks
  const { currentCategory } = useSelector(
    (state) => ({
      currentCategory: state.getIn(["songList", "currentCategory"]),
    }),
    shallowEqual
  );

  return (
    <SongsHeaderWrapper>
      <HeaderLeftWrapper>
        <span className="title">{currentCategory}</span>
        <button
          className="select"
          onClick={(e) => {
            e.stopPropagation();
            setShowCategory(!showCategory);
          }}
        >
          <span>选择分类</span>
          <i className="sprite_icon2"></i>
        </button>
        {showCategory ? <LJSongsCategory /> : null}
      </HeaderLeftWrapper>
      <HeaderRightWrapper>
        <button className="hot">热门</button>
      </HeaderRightWrapper>
    </SongsHeaderWrapper>
  );
});
