import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 2.5rem 1.75rem;

  a {
    color: black;
  }
`;

export const GoButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 4rem;
  padding: 1.2rem;
  margin-top: 0.75rem;
  border: none;
  border-radius: 10px;
  background-color: #0eb29a;
  font-size: 1.2rem;
  font-weight: bold;
  color: white;
  text-align: left;
  cursor: pointer;

  svg {
    width: 2.25rem;
    height: 2.25rem;
  }
`;

export const ProfileContainer = styled.div`
  .name-wrapper {
    display: flex;
    align-items: center;
    margin-bottom: 0.5rem;
    font-weight: bold;

    .setting-btn {
      display: flex;
      padding: 0px;
      border: none;
      background-color: transparent;
      cursor: pointer;
    }
  }

  svg {
    width: 1.875rem;
    height: 1.875rem;
  }

  .follow-wrapper {
    font-size: 0.875rem;
    text-align: left;

    a {
      color: #717171;
      cursor: pointer;
    }

    .following::before {
      display: inline-block;
      width: 1px;
      height: 0.75rem;
      margin: 0 0.625rem;
      background-color: #717171;
      content: '';
      vertical-align: -1px;
    }
  }
`;

export const ProfilePhoto = styled.img`
  width: 5.625rem;
  height: 5.625rem;
  border-radius: 50%;
  object-fit: cover;
`;
