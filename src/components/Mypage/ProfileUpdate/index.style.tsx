import { theme } from '@/theme';
import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  padding-top: 4.25rem;
  box-sizing: border-box;

  .warning-text {
    margin-top: 0.8rem;
    font-size: ${theme.typography.mypage_small.fontSize};
    color: ${theme.palette.error};
  }

  .name-form {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;

    .input-wrap {
      flex-grow: 1;
      width: 100%;
      display: flex;
      align-items: self-end;
    }
  }
`;

export const ProfileImgWrap = styled.div`
  position: relative;
  width: 9.375rem;
  margin-bottom: 2.5rem;

  .file-input-wrap {
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 2rem;
    height: 2rem;
    z-index: 100;

    #profile {
      position: absolute;
      width: 2rem;
      height: 2rem;
      visibility: hidden;
      z-index: 10;
    }
  }

  .camera-button {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 2rem;
    height: 2rem;
    border: none;
    border-radius: 50%;
    background-color: white;
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    cursor: pointer;

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;
