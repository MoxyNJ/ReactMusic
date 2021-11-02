import styled from "styled-components";

export const RankTitleWrapper = styled.div`
  cursor: pointer;
  padding-top: 20px;

  h2 {
    display: inline-block;
    padding: 0 10px 8px 15px;
    width: 100%;

    font-family: simsun;
    font-weight: bold;
    font-size: 14px;
    color: #000;
  }

  img {
    width: 40px;
    height: 40px;
    margin-right: 10px;
    margin-top: 2px;
  }

  .item {
    display: flex;
    width: 100%;

    padding: 10px 0 10px 20px;
    text-decoration: none;

    .title {
      color: #000;
      margin: 2px 0px 6px;
    }
    .time {
      color: #999;
      line-height: 16px;
      height: 16px;
    }
  }
  .item:hover {
    background-color: #f4f2f2;
  }

  .active {
    background: #e6e6e6 !important;
  }
`;
