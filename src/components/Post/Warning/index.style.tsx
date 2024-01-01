import styled from '@emotion/styled';

export const WarningContainer = styled.div(() => ({
  display: 'flex',
  alignItems: 'center',
  width: '18.625rem',
  height: '3.5rem',
  backgroundColor: '#323232',
  marginTop: '1.8rem',
  borderRadius: '10px'
}));

export const WarningLogo = styled.img`
  margin-left: 1rem;
`;

export const WarninginnerText = styled.div`
  margin-left: 1rem;
  color: white;
  font-size: 0.7rem;
  line-height: 1rem;
  white-space: pre-line;
`;
