import Links from "./ConstLinks";
import {axiosTest,url,axiosPostsPreview} from "./Config";

// const getUsers = () => getData(Links.USERS);
const getUsers = () => "hello";


const getPosts = () => axiosTest(Links.POSTS);

const getPostsPreview = () => axiosPostsPreview(Links.POSTS);
// const postPosts = (params) => postData(Links.POSTS, params);
const postPosts = (params) => "hello";


// const postUsers = (params) => postData(Links.USERS, params);

const postUsers = (params) => "hello";


export { getPosts, getUsers, postPosts, postUsers, getPostsPreview };
