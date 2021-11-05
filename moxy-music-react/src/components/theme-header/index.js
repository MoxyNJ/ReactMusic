import React, { memo } from "react";

import { HeaderWrapper } from "./style";

export default memo(function HYThemeHeader(props) {
  const { title, subtitle } = props;

  return (
    <HeaderWrapper>
      <div className="title">{title}</div>
      <div className="right">{subtitle}</div>
    </HeaderWrapper>
  );
});
