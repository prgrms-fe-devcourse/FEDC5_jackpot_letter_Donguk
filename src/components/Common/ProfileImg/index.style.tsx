import styled from '@emotion/styled';

export const ProfilePhoto = styled.img<{ cursor?: string }>`
  border-radius: 50%;
  object-fit: cover;
  cursor: ${(props) => props.cursor ?? 'default'};
`;
