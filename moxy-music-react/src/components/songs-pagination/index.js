import React, { memo } from "react";

import { Pagination } from "antd";
import { PaginationWrapper } from "./style";

export default memo(function LJPagination(props) {
  const { currentPage, total, pageSize, onPageChange } = props;

  // handle function
  // 修改页码的展示样式，“上一页”，“下一页”
  function itemRender(current, type, originalElement) {
    if (type === "prev") {
      return <button className="control prev"> &lt; 上一页</button>;
    }
    if (type === "next") {
      return <button className="control next">下一页 &gt;</button>;
    }
    return originalElement;
  }

  return (
    <PaginationWrapper>
      <Pagination
        className="pagination"
        size="small"
        current={currentPage}
        defaultCurrent={1}
        total={total}
        pageSize={pageSize}
        showSizeChanger={false}
        itemRender={itemRender}
        onChange={onPageChange}
      />
    </PaginationWrapper>
  );
});
