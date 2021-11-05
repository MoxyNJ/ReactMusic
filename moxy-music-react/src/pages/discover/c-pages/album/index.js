import React, { memo } from "react";

import LJHotAlbum from "./c-cpns/album-hot";
import LJTopAlbum from "./c-cpns/album-top";
import { AblumWrapper } from "./style";

export default memo(function LJAlbum() {
  return (
    <AblumWrapper className="wrap-v2">
      <LJHotAlbum />
      <LJTopAlbum />
    </AblumWrapper>
  );
});
