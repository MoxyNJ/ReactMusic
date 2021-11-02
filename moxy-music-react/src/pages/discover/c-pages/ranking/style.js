import styled from "styled-components";
import wrap3 from "@/assets/img/wrap3.png";

export const RankingWrapper = styled.div`
  display: flex;
  background: url(${wrap3}) repeat-y center 0;
  border: 1px solid #d3d3d3;
  border-width: 0 1px;
`;

export const RankingLeft = styled.div`
  width: 240px;
  padding-top: 17px;
`;

export const RankingRight = styled.div`
  width: 740px;
`;
