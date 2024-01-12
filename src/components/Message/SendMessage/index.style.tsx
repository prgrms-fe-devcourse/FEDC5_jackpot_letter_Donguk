import styled from '@emotion/styled';

export const Form = styled.form`
  width: 100%;

  position: relative;
  display: flex;
  justify-content: center;
`;

export const sendMessage = styled.textarea`
  width: 90%;
  height: 2.5rem;
  border-radius: 10px;
  outline: none;
  line-height: 1.5rem;
  font-size: 1rem;
  resize: none;
  word-break: break-all;
  margin: 0.7rem 0 1rem 0;
  padding: 0.5rem 2.5rem 0.5rem 0.5rem;
  box-sizing: border-box;
`;

export const IconButton = styled.button`
  position: absolute;
  right: 1.5rem;
  bottom: 1.2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2rem;
  height: 2rem;
  border-radius: 100px;
  border: 2px solid ${({ theme }) => theme.palette.main};
  box-sizing: border-box;
`;

export const sendIcon = styled.img`
  width: 2rem;
  filter: invert(73%) sepia(57%) saturate(5395%) hue-rotate(130deg)
    brightness(90%) contrast(89%);
`;
