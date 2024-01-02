import axios from 'axios';

export const getChannelList = async () => {
  const { data } = await axios.post('/api', {
    method: 'GET',
    url: '/users/get-users'
  });
  return data;
};
// 다른 channel 요청
