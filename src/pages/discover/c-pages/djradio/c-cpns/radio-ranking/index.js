import React, { useState, useEffect, memo } from "react";
import { useSelector, useDispatch, shallowEqual } from "react-redux";

import { getRadios } from "../../store/actionCreators";

import LJThemeHeader from "@/components/theme-header";
import LJRadioRankingCover from "@/components/radio-ranking-cover";
import LJPagination from "@/components/songs-pagination";

import { RankingWraper } from "./style";
export default memo(function LJRadioRanking() {
  // props 标记当前页数。每页32个
  const [currentPage, setCurrentPage] = useState(1);

  // redux
  const { currentId = 0, radios = [] } = useSelector(
    (state) => ({
      currentId: state.getIn(["djRadio", "currentId"]),
      radios: state.getIn(["djRadio", "radios"]),
    }),
    shallowEqual
  );
  const dispatch = useDispatch();

  // hooks
  useEffect(() => {
    dispatch(getRadios(currentId, 0));
  }, [dispatch, currentId]);

  // hanlde function
  const onPageChange = (page, pageSize) => {
    setCurrentPage(page);
    dispatch(getRadios(currentId, page * 32));
  };

  return (
    <RankingWraper>
      <LJThemeHeader title="电台排行榜" />
      <div className="ranking-list">
        {radios.map((item, index) => {
          return <LJRadioRankingCover key={item.id} radio={item} />;
        })}
      </div>
      <LJPagination
        currentPage={currentPage}
        total={1000}
        pageSize={32}
        onPageChange={onPageChange}
      />
    </RankingWraper>
  );
});
