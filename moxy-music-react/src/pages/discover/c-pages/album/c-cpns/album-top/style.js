import styled from "styled-components";

export const TopAlbumWrapper = styled.div`
  margin-top: 10px;

  .album-list {
    display: flex;
    /* flex 排布允许折行 */
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 5px;
  }
`;
