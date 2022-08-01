import styled from "styled-components";

export const HeaderRankingWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: 2px solid #c20c0c;
  padding-bottom: 2px;

  .left {
    .title {
      font-size: 20px;
      line-height: 28px;
    }
    .songNumber {
      margin: 9px 0 0 20px;
      color: #666;
    }
  }

  .right {
    margin-top: 5px;

    .playNumber {
      color: #c20c0c;
      padding-right: 2px;
      font-weight: bold;
    }
  }
`;
