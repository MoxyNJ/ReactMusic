import styled from "styled-components";
import sprite_footer_01 from "@/assets/img/sprite_footer_01.png";
import sprite_footer_03 from "@/assets/img/sprite_footer_03.png";
import police from "@/assets/img/police.png";

export const AppFooterWrapper = styled.div`
  height: 172px;
  background-color: #f2f2f2;
  color: #666;
  border-top: 1px solid #d3d3d3;

  .content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const FooterLeft = styled.div`
  padding-top: 15px;
  line-height: 24px;

  .link {
    a {
      color: #999;
    }

    .line {
      margin: 0 10px;
      color: #999;
    }

    .line:nth-last-child(1) {
      display: none;
    }
  }

  .copyright,
  .report {
    span {
      margin-right: 15px;
    }
  }
  .info {
    .police-icon {
      display: inline-block;
      background: url(${police}) no-repeat;
      background-size: cover;
      width: 14px;
      height: 14px;
      margin: 0px 2px 0 8px;
      vertical-align: -2px;
    }
  }
`;

export const FooterRight = styled.ul`
  display: flex;

  .item:nth-last-child(1) {
    margin-right: 5px;
  }

  .item:nth-child(1) {
    margin-right: 26px;
  }

  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 40px;

    .link {
      display: block;
      width: 50px;
      height: 45px;

      background-image: url(${sprite_footer_03});
      background-size: 110px 552px;
    }

    :nth-child(1) .link {
      background-position: -60px -456.5px;
      margin-right: 2px;
    }
    :nth-child(2) .link {
      background-position: -60px -101px;
      margin-right: 2px;
    }
    :nth-child(3) .link {
      background-position: 0 0;
    }
    :nth-child(4) .link {
      background-position: -60px -50px;
    }

    :nth-child(5) .link {
      background-position: 0 -101px;
    }

    .title {
      margin-top: 5px;
      display: block;
      width: 52px;
      height: 10px;
      background-image: url(${sprite_footer_01});
      background-size: 180px 139px;
    }

    :nth-child(1) .title {
      background-position: 0 -108px;
      margin-top: 7px;
      width: 72px;
    }
    :nth-child(2) .title {
      background-position: -1px -91px;
      margin-top: 7px;
      margin-right: -4px;
    }
    :nth-child(3) .title {
      background-position: 0 0;
      margin-top: 7px;
      margin-left: -2px;
    }

    :nth-child(4) .title {
      background-position: 0 -54px;
      margin-top: 6px;
      margin-right: -4px;
    }

    :nth-child(5) .title {
      background-position: -1px -72px;
      margin-top: 6px;
    }
  }
`;
