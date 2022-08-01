import styled from "styled-components";

export const AlbumWrapper = styled.div`
  margin-top: 75px;

  .content {
    height: 186px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    margin: 20px 0 37px;
    display: flex;
    justify-content: center;
    align-items: center;

    .arrow {
      width: 17px;
      height: 17px;
      cursor: pointer;
      top: 50%;
      margin-top: -20px;
    }

    .arrow-left {
      background-position: -260px -75px;
    }

    .arrow-right {
      background-position: -300px -75px;
    }

    .album {
      width: 634px;
      height: 150px;
      margin-left: 7px;

      .ant-carousel .slick-slide {
        margin-top: -4px;
        height: 150px;
        overflow: hidden;
      }

      .page {
        display: flex !important;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
`;
