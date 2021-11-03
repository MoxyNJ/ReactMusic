import styled from "styled-components";

export const LJRankingTitleWrapper = styled.div`
  display: flex;
  padding: 40px;

  .image {
    position: relative;
    padding: 3px;
    border: 1px solid #ccc;

    img {
      width: 150px;
      height: 150px;
    }
  }

  .mask {
    width: 150px;
    height: 150px;
    background-position: -230px -380px;
    position: absolute;
    top: 0;
    margin-top: 3px;
  }

  .info {
    padding-left: 30px;

    .name {
      margin: 16px 0px 4px;
      line-height: 24px;
      font-size: 20px;
      font-weight: normal;
    }

    .time {
      margin-bottom: 20px;
      line-height: 35px;
      .icon {
        display: inline-block;
        position: relative;
        top: 1px;
        width: 13px;
        height: 13px;
        background-position: -18px -682px;
        margin-left: 2px;
      }
      .flash {
        margin-left: 5px;
        color: #666;
      }
      .regular {
        color: #999;
      }
    }
  }
`;
