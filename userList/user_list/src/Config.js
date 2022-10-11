import Axios from 'axios'

export const axiosTest = async url => {
  return await Axios.get(url).then( res => res.data)
}

export const axiosPostsPreview = async url => {
  return await axiosTest(url).then(  posts => {
    posts.map( async post => {
      // const res = await Axios.get(url+'/'+post.id+'/comments').then( res => res.data)
      // post.comments = res
      Object.assign(post,{commnets: await Axios.get(url+'/'+post.id+'/comments').then( res => res.data)})
      
    })
    return posts;
  })
}