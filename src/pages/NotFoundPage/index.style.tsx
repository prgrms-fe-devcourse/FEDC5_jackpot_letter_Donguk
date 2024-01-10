import styled from '@emotion/styled';

export const LogoContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0 1.25rem;
`;

export const LottieContainer = styled.div`
  margin-top: 9.3rem;
`;
export const ImageWrapper = styled.div`
  align-items: flex-start;
`;

export const SubContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
`;

export const MainText = styled.p(({ theme }) => ({
  ...theme.typography.mypage_large,
  margin: '0.7rem 0'
}));

export const SubText = styled.p`
  padding: 0 1rem;
  line-height: 1.5;
  word-break: keep-all;
  white-space: pre-wrap;
`;

export const BtnWrapper = styled.div`
  position: absolute;
  bottom: 0;
  margin-bottom: 2rem;
`;
