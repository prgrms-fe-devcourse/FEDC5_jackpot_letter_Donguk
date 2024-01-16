import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  padding: 2rem;
`;

export const HeaderInnerText = styled.div`
  ${(props) => props.theme.typography.postTitle}
  color: white;
`;

export const HeaderUserName = styled.span`
  color: ${(props) => props.theme.palette.main};
`;
