import request from '../utils/request';

export function fetch() {
  return request(`http://www.vpgame.com/api/home`);
}