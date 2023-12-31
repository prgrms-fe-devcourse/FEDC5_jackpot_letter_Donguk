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

export const NameDescription = styled.p`
  font-size: 11px;
  color: #000;
  align-self: flex-start;
`;

// 공통 컴포넌트로 변경
export const Button = styled.button<{ width: string }>`
  width: ${(props) => props.width};
  height: 37px;
  flex-shrink: 0;
  border-radius: 10px;
  background-color: #0eb29a;
  border: #0eb29a;
  color: #fff;
  font-weight: 600;
  font-size: 13px;
`;

export const InputName = styled.div`
  display: flex;
  align-items: flex-end;
  gap: 10px;
`;
