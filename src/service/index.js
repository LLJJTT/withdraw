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

// 获得首页信息
export async function getIndexdetails(params) {
	return await axios.get(`http://192.168.1.111:3000/mock/22/api/v1/index`)
}

// 获得所有账户列表
export async function getAccountAll(params) {
	return await axios.post(`http://192.168.1.111:3000/mock/22/api/v1/account_list`,params)
}

