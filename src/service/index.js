import axios from 'axios';
const host = 'http://61.181.255.99';
// 存储token
export async function getToken (params) {
  return await axios.post(`${host}/api/v1/login`,params);
}
// 获得所有提现的详情
export async function getCashdetails(params) {
	return await axios.post(`${host}/api/v1/transfer_record`,params);
}

