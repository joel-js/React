import Axios from "axios";

export const axiosTest = async (url) => {
  return await Axios.get(url).then((res) => res.data);
};

// export const axiosPostsPreview = async url => {
//   return await axiosTest(url).then( posts => {
//     const newPosts = posts.map(
//       async post =>
//         await Axios.get(url + "/" + post.id + "/comments").then( res => ({
//           ...post,
//           comments: res.data,
//         }))
//     );
//     return newPosts;
//   });
// };

export const axiosPostsPreview = async (url) => {
  return await axiosTest(url).then(async (posts) => {
    const urls = posts.map((post) =>
      Axios.get(url + "/" + post.id + "/comments")
    );
    const comments = (await Promise.all(urls)).map((comment) => comment.data);
    console.log((comments))
    debugger
    const newPosts = posts.map((post) => ({
      ...post,
      comments: comments[post.id],
    }));
    return newPosts;
  });
};

// const res = await Axios.get(url+'/'+post.id+'/comments').then( res => res.data)
// post.comments = res
