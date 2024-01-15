import styled from '@emotion/styled';

export const Container = styled.div`
  line-height: 1.5;
  overflow-y: scroll;
  height: 100%;
  animation: fadein 1s;

  &::-webkit-scrollbar {
    display: none;
  }

  @keyframes fadein {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Text = styled.span(({ theme }) => ({
  color: theme.palette.main
}));
export const Information = styled.div`
  margin-bottom: 20px;
  word-break: keep-all;
`;

export const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
`;

export const SubTitle = styled.div`
  font-size: 20px;
  margin: 20px 0;
  font-weight: 700;
`;
