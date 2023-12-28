import axios from 'axios';

export async function requestAPI() {
  const data = await axios.post('/api/get', {
    path: '/users/get-users'
  });

  return data;
}
