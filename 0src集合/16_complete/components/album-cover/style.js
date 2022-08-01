import styled from "styled-components";

export const AlbumWrapper = styled.div`
  /* props: 
      size: 130,
      width: 153, 
      height: 153,
      bgp: -845,  
  */

  width: ${(props) => props.width + "px"};
  margin-bottom: ${(props) => (props.elemSize !== "big" ? "0" : "15px")};

  .album-image {
    position: relative;
    width: ${(props) => props.width + "px"};
    height: ${(props) => props.size + "px"};
    overflow: hidden;
    margin-top: 15px;

    img {
      width: ${(props) => props.size + "px"};
      height: ${(props) => props.size + "px"};
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${(props) => props.bgp + "px"};
      text-indent: -9999px;
    }

    .play {
      /* size=130 */
      position: absolute;

      bottom: ${(props) => (props.size === 130 ? 5 + "px" : 4 + "px")};
      left: ${(props) => (props.size === 130 ? 94 + "px" : 72 + "px")};
      width: ${(props) => (props.size === 130 ? 28 + "px" : 22 + "px")};
      height: ${(props) => (props.size === 130 ? 28 + "px" : 22 + "px")};
      background-position: 0
        ${(props) => (props.size === 130 ? -140 + "px" : -110 + "px")};

      text-indent: -9999px;
      display: none;
    }
    &:hover .play {
      display: block;
    }
  }

  .album-info {
    font-size: 12px;
    width: ${(props) => props.size};
    .name {
      color: #000;
      /* 不允许折行 */
      white-space: nowrap;
      /* 超出包含块边界后，用省略号表示 */
      text-overflow: ellipsis;
      overflow: hidden;
      margin: ${(props) =>
        props.elemSize !== "big" ? "3px 0 0 0" : "8px 0 2px"};
      font-size: ${(props) => (props.elemSize !== "big" ? "12px" : "14px")};
    }

    .artist {
      color: #666;
    }
  }
`;
