import React, { memo } from "react";
import PropTypes from "prop-types";

import { HeaderWrapper } from "./style";

const LJThemeHeaderSettleSinger = memo(function (props) {
  const { title, moreInfo = "查看全部" } = props;

  return (
    <HeaderWrapper>
      <h3>{title}</h3>
      <a href="/todo">{moreInfo}</a>
    </HeaderWrapper>
  );
});

LJThemeHeaderSettleSinger.defaultProps = {};

LJThemeHeaderSettleSinger.propTypes = {
  title: PropTypes.string.isRequired,
  more: PropTypes.string,
};

export default LJThemeHeaderSettleSinger;
