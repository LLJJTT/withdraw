import axios from 'axios';
export async function getToken (params) {
  return await axios.post(`http://61.181.255.99/api/v1/login`);
}
