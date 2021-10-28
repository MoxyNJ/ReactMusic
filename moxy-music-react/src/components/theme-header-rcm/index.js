import React, { memo } from "react";
import propTypes from "prop-types";

import { HeaderWrapper } from "./style";

const LJThemeHeaderRCM = memo(function (props) {
  const { title, keywords } = props;
  return (
    <HeaderWrapper className="sprite_02">
      <div className="left">
        <h3 className="title">{title}</h3>
        <div className="keyword">
          {keywords.map((item, index) => {
            return (
              <div className="item" key={item}>
                <a href="todo">{item}</a>
                {index !== keywords.length - 1 ? (
                  <span className="divider">|</span>
                ) : (
                  <div />
                )}
              </div>
            );
          })}
        </div>
      </div>
      <div className="right">
        <a href="todo">更多</a>
        <i className="icon sprite_02"></i>
      </div>
    </HeaderWrapper>
  );
});

// 类型检查
LJThemeHeaderRCM.propTypes = {
  title: propTypes.string.isRequired,
  keywords: propTypes.array,
};
// 默认值，防止 keywords是 undefined 而报错
LJThemeHeaderRCM.defaultProps = {
  keywords: [],
};

export default LJThemeHeaderRCM;
