import toast from 'react-hot-toast';

const USERNAME = '익명';

export const isAnonymous = (userName: string, message: string) => {
  if (userName === USERNAME) {
    toast.error(message);
  }
  return userName === USERNAME ? false : true;
};

export const isLogout = (userName: string, message: string) => {
  if (!userName) {
    toast.error(message);
    return false;
  }
  return true;
};

export const isInclude = (
  channelNames: string[],
  userName: string,
  message: string
) => {
  if (channelNames.includes(userName)) {
    toast.error(message);
    return false;
  }
  return true;
};
