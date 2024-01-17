import styled from '@emotion/styled';

export const LetterContainer = styled.div`
  position: absolute;
  height: 55vh;
  width: 100%;
  bottom: 0;
`;

export const Letter = styled.div<{
  position: { bottom: string; left: string };
}>`
  position: absolute;
  width: 4rem;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
  img {
    width: 3rem;
    height: 3.5rem;
  }
  span {
    display: block;
    font-size: small;
    text-align: center;
    width: 4rem;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  ${({ position }) => position}
`;

export const AnnounceBox = styled.div<{
  visible: boolean;
}>`
  display: ${({ visible }) => (visible ? 'block' : 'none')};
  position: absolute;
  width: 13rem;
  height: 2.6rem;
  left: 2rem;
  background: ${({ theme }) => theme.palette.gray_2};
  border-radius: 5px;
  padding: 12px 12.8px;
  line-height: 1.3rem;
  &:after {
    border-top: 10px solid ${({ theme }) => theme.palette.gray_2};
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 0px solid transparent;
    content: '';
    position: absolute;
    top: 4em;
    left: 4rem;
  }
  animation: topdown 1.1s infinite;
  @keyframes topdown {
    0% {
      bottom: 7rem;
    }
    50% {
      bottom: 7.2rem;
    }
    100% {
      bottom: 7rem;
    }
  }
`;
