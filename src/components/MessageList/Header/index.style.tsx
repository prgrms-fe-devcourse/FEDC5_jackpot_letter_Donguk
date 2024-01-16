import styled from '@emotion/styled';

export const HeaderContainer = styled.div`
  padding: 2rem;
`;

export const HeaderInnerText = styled.div<{ darkMode: boolean }>`
  ${(props) => props.theme.typography.postTitle};
  color: ${(props) =>
    props.darkMode
      ? props.theme.palette.dark_font
      : props.theme.palette.light_font};
`;

export const HeaderUserName = styled.span`
  color: ${(props) => props.theme.palette.main};
`;
