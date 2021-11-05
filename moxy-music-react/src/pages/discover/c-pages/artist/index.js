import React, { memo } from "react";

import LJArtistCategory from "./c-cpns/artist-category";
import LJArtistList from "./c-cpns/artist-list";
import { ArtistWrapper } from "./style";

export default memo(function LJArtist() {
  return (
    <ArtistWrapper>
      <div className="content wrap-v2">
        <LJArtistCategory />
        <LJArtistList />
      </div>
    </ArtistWrapper>
  );
});
