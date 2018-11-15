import request from '../utils/request';

export function fetch() {
  return request(`https://library.mlewear.com/api/home`);
}