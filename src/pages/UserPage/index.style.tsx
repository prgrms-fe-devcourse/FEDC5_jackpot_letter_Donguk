import { theme } from '@/theme';
import styled from '@emotion/styled';

export const Section = styled.div`
  display: flex;
  flex-direction: column;
  height: 60svh;
  padding: 1rem 1.75rem 2.5rem 1.75rem;
  box-sizing: border-box;

  .go-btn-wrap {
    flex-grow: 1;
    display: flex;
    align-items: flex-end;
  }

  .follow-btn-wrap {
    display: flex;
    gap: 1rem;
  }
`;

export const TextInfoWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin-bottom: 1rem;

  .user-name {
    font-weight: bold;
    font-size: ${theme.typography.mypage_large.fontSize};
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100svh;
`;

export const UserImgWrap = styled.div`
  position: relative;
  width: 100%;
  height: 40svh;
  text-align: center;

  .profile-img-wrap {
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translate(-50%, 0%);
    z-index: 2;
  }

  .bg {
    position: absolute;
    top: 0px;
    width: 100%;
    height: 84%;
    background-color: #798de2;
    z-index: 0;
  }
`;

export const ProfileCover = styled.div<{ url: string }>`
  position: absolute;
  top: 0px;
  width: 100%;
  height: 84%;
  background-image: ${(props) => `url(${props.url})`};
  background-repeat: no-repeat;
  background-size: cover;
  z-index: 0;
`;
