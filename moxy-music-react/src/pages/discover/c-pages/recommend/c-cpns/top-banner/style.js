import styled from "styled-components";
import download from "@/assets/img/download.png";
import banner_sprite from "@/assets/img/banner_sprite.png";

export const BannerWrapper = styled.div`
  /* 可以通过 props 从组件中接收参数，然后使用 */
  /* center/6000 ==> bacnground-position/bacnground-position-size */
  background: url(${(props) => props.bgImage}) center center/6000px;

  .banner {
    height: 285px;
    background-color: red;

    display: flex;
    position: relative;
  }

  a:hover {
    text-decoration: none;
  }
`;

export const BannerLeft = styled.div`
  width: 730px;

  .banner-item {
    overflow: hidden;
    height: 285px;
    background-position: center;

    .image {
      height: 100%;
      margin: 0 -20px;
    }
  }
  .dots {
    bottom: 5px;
    li {
      width: 20px;
      height: 20px;
      display: flex;
      align-items: center;

      button {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #aaa;
      }
    }

    li.slick-active {
      width: 20px;
      top: 1px;
      button {
        background-color: #c20c0c;
      }
    }
  }
`;

export const BannerRight = styled.a.attrs({
  href: "https://music.163.com/#/download",
  target: "_blank",
})`
  width: 254px;
  height: 285px;
  /* background: url(${require("@/assets/img/download.png")}); */
  background: url(${download});

  .SignInInfo {
    text-align: center;
    margin-top: 253px;
    color: #8d8d8d;
  }
`;

export const BannerControl = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin-top: -31px;
  top: 50%;
  transform: translateY(-50%);

  .btn {
    position: absolute;
    top: 50%;
    width: 37px;
    height: 63px;
    /* background-image: url(${require("@/assets/img/banner_sprite.png")}); */
    background-image: url(${banner_sprite});
    background-color: transparent;
    cursor: pointer;

    &:hover {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  .left {
    left: -68px;
    background-position: 0 -360px;
  }

  .right {
    right: -68px;
    background-position: 0 -508px;
  }
`;
