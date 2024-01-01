import styled from '@emotion/styled';

export const PrePostAndCommentContainer = styled.div`
  overflow-x: scroll;
  padding-bottom: 0.5rem;
  box-sizing: border-box;
`;

export const PrePostContainer = styled.div(({ theme }) => ({
  backgroundColor: theme.palette.sub,
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: '19.375rem',
  height: '8.125rem',
  marginBottom: '0.5rem',
  borderRadius: '20px',
  boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.5)'
}));

export const PrePostInnerTitle = styled.textarea`
  flex-grow: 0;
  width: 95%;
  height: 2.5rem;
  font-size: 1rem;
  font-weight: 500;
  background-color: transparent;
  border-color: transparent;
  padding: 1rem 1rem 0 0.5rem;
  outline: none;
  resize: none;
  box-sizing: border-box;
`;

export const PrePostUnnerline = styled.div`
  width: 90%;
  height: 1px;
  background-color: #aca3a3;
`;

export const PrePostContent = styled.textarea`
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

export const PreCommentContainer = styled.div(() => ({
  display: 'flex',
  position: 'relative',
  flexDirection: 'column',
  alignItems: 'center',
  width: '19.375rem',
  height: '13.5625rem', //'13.3125rem',
  borderRadius: '20px'
  //   boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.5)'
}));

export const PrePostComment = styled.div(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  backgroundColor: theme.palette.sub,
  fontSize: '0.8rem',
  width: '100%',
  height: 'auto',
  marginBottom: '0.5rem',
  padding: '0.5rem',
  boxSizing: 'border-box',
  borderRadius: '20px'
}));
