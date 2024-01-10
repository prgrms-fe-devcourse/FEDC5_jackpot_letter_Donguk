import styled from '@emotion/styled';

export const Container = styled.div`
  position: absolute;
  padding: 2rem 1rem;
  right: 0;
  z-index: 10;
`;

export const Button = styled.button`
  background: inherit;
  position: static;
  border: none;
  box-shadow: none;
  border-radius: 0;
  padding: 0;
  overflow: visible;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 600;
`;
export const MenuContainer = styled.div`
  position: absolute;
  top: 100;
  right: 0;
  flex-direction: column;
  align-items: flex-start;
  background-color: white;
  width: 8.6rem;
  box-sizing: border-box;
  margin-right: 1rem;
  padding: 0.4rem;
  border-radius: 10px;
`;

export const Menu = styled.div`
  padding: 0.7rem;
  color: black;
  font-size: 1rem;
  font-weight: 600;
`;
