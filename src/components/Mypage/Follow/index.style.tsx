import { theme } from '@/theme';
import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 1.625rem 1.75rem;

  .follow-title-wrap {
    span {
      display: inline-block;
      width: 50%;
      padding: 15px;
      font-size: ${theme.typography.mypage_regular.fontSize};
      font-weight: bold;
      text-align: center;
      box-sizing: border-box;
      cursor: pointer;
    }
  }

  .follow-list-container {
    display: flex;
    width: 200%;
  }
`;

export const UnderLine = styled.hr`
  width: 50%;
  height: 1px;
  margin: 0px;
  margin-bottom: 1.5rem;
  border: none;
  background-color: black;
  transition: all 0.3s ease;

  &.active {
    margin-left: 50%;
  }
`;
