import styled from "styled-components";

import mine_sprite from "@/assets/img/mine_sprite.png";

export const MineWrapper = styled.div`
  .main {
    background-color: #fff;
    min-height: 700px;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;

    .image {
      position: relative;
      width: 807px;
      height: 382px;
      margin: 0 auto;
      padding-top: 104px;
      background: url(${mine_sprite}) 0 104px no-repeat;

      .login {
        position: absolute;
        width: 167px;
        height: 45px;
        left: 482px;
        top: 302px;
      }
      .login:hover {
        background: url(${mine_sprite}) 0 -274px no-repeat;
      }
    }
  }
`;
