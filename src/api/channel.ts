import axios from 'axios';

export const getChannelList = async () => {
  const { data } = await axios.post('/api', {
    method: 'GET',
    url: '/channels'
  });
  return data;
};

export const getChannel = async (channelId: string) => {
  const { data } = await axios.post('/api', {
    method: 'GET',
    url: `/channels/${channelId}`
  });

  console.log(data, 'tes', channelId);
  return data;
};
