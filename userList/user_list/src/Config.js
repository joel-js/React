import Axios from 'axios'

export async function axiosTest(url) {
  return await Axios.get(url).then( res => res.data)
}

