import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  width: 19.375rem;
  height: 3rem;
  margin-top: 2.0625rem;
`;

export const HeaderInnerText = styled.div(({ theme }) => ({
  ...theme.typography.postTitle,
  lineHeight: '1.8rem',
  color: 'white'
}));

export const HeaderUserName = styled.span(({ theme }) => ({
  color: theme.palette.main
}));
