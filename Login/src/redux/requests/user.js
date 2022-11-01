import axios from "axios";

export const userData = () => {
  return axios.request({
    method  : 'get',
    url     : 'http://localhost:8000/user'
  })
}