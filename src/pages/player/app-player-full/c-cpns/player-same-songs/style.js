import styled from "styled-components";

export const PlayerSameSongsWrapper = styled.div`
  margin-top: 40px;

  .songs {
    .song-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 8px;

      .info {
        .title {
          max-width: 150px;
          a {
            color: #333;
          }
        }

        .artist {
          a {
            color: #999;
          }
        }
      }

      .operate {
        .item {
          display: inline-block;
          width: 10px;
          height: 11px;
        }

        .play {
          background-position: -69px -455px;
          margin-right: 14px;
          cursor: pointer;
        }

        .add {
          background-position: -87px -454px;
          cursor: pointer;
        }
      }
    }
  }
`;
