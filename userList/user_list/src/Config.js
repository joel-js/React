import Axios from 'axios'

export async function axiosTest(url) {
  return await Axios.get(url).then( res => res.data)
}

// export async function axiosGetPostComments(url,id){
//   return await Axios.get(url+'/'+id+'/'+'comments').then( res => res.data)
// }

export async function axiosPostsPreview(url) {

  return await axiosTest(url).then( async data => {
    
    const urls = data.map( item => Axios.get(url+'/'+item.id+'/comments') )
    const res = await Promise.all(urls)
    const return_data = res.map( res => res.data)
    // data.map( post => {
    //   return Axios.get(url+'/'+post.id+'/comments').then( res => res.data)
    // })


    return return_data;
  })
}