import styled from "styled-components";

export const TopAlbumWrapper = styled.div`
  margin-top: 30px;
  .album-list {
    display: flex;
    /* flex 排布允许折行 */
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;
