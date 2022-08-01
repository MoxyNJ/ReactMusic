import React, { memo } from "react";

import { HeaderPlayerWrapper } from "./style";

export default memo(function LJThemeHeaderPlayer(props) {
  const { title } = props;

  return (
    <HeaderPlayerWrapper>
      <h3>{title}</h3>
    </HeaderPlayerWrapper>
  );
});
