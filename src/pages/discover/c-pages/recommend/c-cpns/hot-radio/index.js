import React, { memo } from "react";

import LJThemeHeaderSettleSinger from "@/components/theme-header-settle-singer";

import { hotRadios } from "@/services/local-data";
import { getSizeImage } from "@/utils/format-utils";
import { HotRadioWrapper } from "./style";

export default memo(function LJHotRadio() {
  return (
    <div>
      <HotRadioWrapper>
        <LJThemeHeaderSettleSinger title={"热门主播"} moreInfo={""} />
        <div className="radio-list">
          {hotRadios.map((item, index) => {
            return (
              <div key={item.name} className="item">
                <a href="/todo" className="image">
                  <img src={getSizeImage(item.picUrl, 40)} alt={item.name} />
                </a>
                <div className="info">
                  <div className="name">{item.name}</div>
                  <div className="position text-nowrap">{item.position}</div>
                </div>
              </div>
            );
          })}
        </div>
      </HotRadioWrapper>
    </div>
  );
});
