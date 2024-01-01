import styled from '@emotion/styled';

export const LetterContainer = styled.div(({ theme }) => ({
  backgroundColor: theme.palette.sub,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '19.375rem',
  height: '13.3125rem',
  borderRadius: '20px',
  marginTop: '1.625rem',
  boxShadow: '0px 4px 4px 0px rgba0, 0, 0, 0.25)'
}));

export const LetterTitle = styled.textarea`
  flex-grow: 0;
  width: 95%;
  height: 40px;
  font-size: 1rem;
  font-weight: 500;
  background-color: transparent;
  border-color: transparent;
  padding: 1rem 1rem 0 0.5rem;
  outline: none;
  resize: none;
  box-sizing: border-box;
`;

export const TitleUnderLine = styled.div`
  width: 90%;
  height: 1px;
  background-color: #aca3a3;
`;

export const LetterContent = styled.textarea`
  flex-grow: 1;
  width: 95%;
  background-color: transparent;
  border-color: transparent;
  outline: none;
  resize: none;
  margin: 0.6rem 0;
  padding: 0 0.6rem;
  box-sizing: border-box;
`;
