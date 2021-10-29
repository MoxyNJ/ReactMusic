import styled from "styled-components";

export const SetterSongerWrapper = styled.div`
  padding: 20px;

  .singer-list {
    .item {
      display: flex;
      height: 62px;
      margin-top: 14px;
      background-color: #fafafa;
      text-decoration: none;

      :hover {
        background-color: #f4f4f4;
      }

      img {
        width: 62px;
        height: 62px;
      }

      .info {
        margin: 8px 0 0 10px;
        .title {
          color: #333;
          font-size: 14px;
          font-weight: 700;
        }

        .name {
          margin-top: 5px;
        }
      }
    }
  }

  .apply-for {
    a {
      margin-left: 16px;
      border-radius: 4px;
      background-position: right -100px;
      padding: 0 5px 0 0;
      display: inline-block;
      outline: none;
    }

    i {
      display: inline-block;
      height: 31px;
      line-height: 31px;
      overflow: hidden;
      text-align: center;
      cursor: pointer;

      width: 170px;
      font-weight: bold;
      color: #333;
      background-position: 0 -59px;
      padding: 0 15px 0 20px;
    }

    &:hover a {
      background-position: right -182px;
    }

    &:hover i {
      background-position: 0 -141px;
    }
  }
`;
