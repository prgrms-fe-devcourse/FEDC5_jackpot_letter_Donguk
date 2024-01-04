import styled from '@emotion/styled';

export const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 1.25rem;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  text-align: center;
  gap: 1.25rem;
  color: white;

  a {
    text-decoration: none;
    color: white;
    align-self: flex-start;
  }
`;

export const Description = styled.p`
  font-weight: 700;
  opacity: 0.7;
`;

export const Title = styled.div(({ theme }) => ({
  ...theme.typography.title1
}));

export const ImageContainer = styled.div`
  margin-top: 0;
  padding: 0 0.63rem;
`;
