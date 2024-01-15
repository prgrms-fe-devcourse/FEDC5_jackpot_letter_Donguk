import toast from 'react-hot-toast';

const USERNAME = '익명';

export const createChannelFromAnonymous = (userName: string) => {
  if (userName === USERNAME)
    toast.error(
      '익명 사용자는 채널을 생성할 수 없습니다. 회원가입을 진행해주세요.'
    );
  return false;
};
