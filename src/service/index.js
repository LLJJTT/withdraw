import axios from 'axios';
const host = 'http://localhost/aaa';
export async function getAll () {
  return await axios.get(`${host}/aaa.php`);
}
// export async function getById () {
// 	return await axios.get(`${host}/getById.php`);
// }


import axios from 'axios';
export async function getAll () {
  return await axios.get(`https://translate.yandex.net/api/v1.5/tr.json/translate?key=trnsl.1.1.20171215T075514Z.8d0cfd6e20ee0217.51224bf471ddc6f7e6f7ce89a1587b5806fd7d32&lang=en&text=%E6%88%91%E6%98%AF%E5%A5%BD%E4%BA%BA`);
}