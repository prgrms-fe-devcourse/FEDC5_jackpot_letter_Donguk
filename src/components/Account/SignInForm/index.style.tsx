import styled from '@emotion/styled';

// 회원가입, 로그인에서 공통 사용
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 20rem;
  height: auto;
  min-height: 23rem;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 10px;
  box-sizing: border-box;
  margin-top: 1.25rem;
  padding: 1.25rem;
  gap: 0.6rem;
`;

// 회원가입, 로그인에서 공통 사용
export const FormTitle = styled.p`
  color: #000;
  font-size: 1rem;
  font-weight: 700;
  text-align: center;
`;
