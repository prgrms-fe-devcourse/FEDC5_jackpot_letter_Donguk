import styled from '@emotion/styled';

export const SearchBarContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  width: 90%;
  height: 3rem;
  margin: 0 auto;
  border-radius: 10px;
`;

export const SearchIcon = styled.img`
  position: absolute;
  left: 0.5rem;
  width: 2rem;
  filter: invert(0%) sepia(100%) saturate(9%) hue-rotate(195deg) brightness(0%)
    contrast(103%);
`;

export const SearchBar = styled.input`
  width: 100%;
  height: 100%;
  font-size: 1.2rem;
  border: 0.5px solid gray;
  padding: 0 0.6rem 0 2.5rem;
  background-color: white;
  border-radius: 10px;
  box-sizing: border-box;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
`;
