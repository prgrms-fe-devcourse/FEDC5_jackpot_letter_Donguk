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
    font-size: ${theme.typography.mypage_small.fontSize};
    color: ${theme.palette.error};
  }

  .name-form {
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    width: 100%;

    .input-wrap {
      flex-grow: 1;
    }
  }
`;

export const ProfileImgWrap = styled.div`
  position: relative;
  width: 9.375rem;
  margin-bottom: 2.5rem;

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
    cursor: pointer;

    svg {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;
