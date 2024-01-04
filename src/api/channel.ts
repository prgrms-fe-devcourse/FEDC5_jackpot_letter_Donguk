import axios from 'axios';

export const getChannelList = async () => {
  const { data } = await axios.post('/api', {
    method: 'GET',
    url: '/channels'
  });
  return data;
};
// 다른 channel 요청
