import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  width: 19.375rem;
  height: 3rem;
  margin-top: 2.0625rem;
`;

export const HeaderInnerText = styled.div`
  ${(props) => props.theme.typography.postTitle};
  line-height: 1.8rem;
  color: white;
`;

export const HeaderUserName = styled.span`
  color: ${(props) => props.theme.palette.main};
`;
