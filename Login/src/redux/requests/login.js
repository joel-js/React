import axios from 'axios';

export const loginCred = () => {
  return axios.request({
    method: 'get',
    url:'http://localhost:8000/login'
  })
}