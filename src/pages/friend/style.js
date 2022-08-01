import styled from "styled-components";

import friend_sprite from "@/assets/img/friend_sprite.jpg";

export const FriendWrapper = styled.div`
  .main {
    background-color: #fff;
    min-height: 700px;
    border: 1px solid #d3d3d3;
    border-width: 0 1px;

    .image {
      position: relative;
      width: 825px;
      height: 500px;
      margin: 0 38px;
      background: url(${friend_sprite}) 0 70px no-repeat;

      .text {
        position: absolute;
        left: 535px;
        top: 248px;
        color: #666;
        font-size: 14px;

        span {
          display: inline-block;
          margin-bottom: 1px;
        }
      }

      .login {
        position: absolute;
        width: 157px;
        height: 50px;
        left: 535px;
        top: 330px;
      }
      .login:hover {
        background: url(${friend_sprite}) 0 -430px no-repeat;
      }
    }
  }
`;
