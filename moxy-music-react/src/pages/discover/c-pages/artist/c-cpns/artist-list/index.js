import React, { memo } from "react";
import { useSelector, shallowEqual } from "react-redux";

import LJThemeHeader from "@/components/theme-header";
import LJAlphaList from "./c-cpns/alpha-list";
import LJArtistItem from "./c-cpns/artist-item";
import { ArtistListWrapper } from "./style";

export default memo(function LJArtistList() {
  // redux hooks
  const { currentType, artistList } = useSelector(
    (state) => ({
      currentType: state.getIn(["artist", "currentType"]),
      artistList: state.getIn(["artist", "artistList"]),
    }),
    shallowEqual
  );

  return (
    <ArtistListWrapper>
      <LJThemeHeader title={currentType.name} />
      <LJAlphaList />
      <div className="artist-list">
        {artistList.map((item, index) => {
          return <LJArtistItem key={item.id} index={index} info={item} />;
        })}
      </div>
    </ArtistListWrapper>
  );
});
