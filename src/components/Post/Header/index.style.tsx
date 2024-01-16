import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  width: 100%;
  height: 3rem;
`;

export const HeaderInnerText = styled.div`
  ${(props) => props.theme.typography.postTitle}
`;

export const HeaderUserName = styled.span`
  color: ${(props) => props.theme.palette.main};
`;
