import Links from "./ConstLinks";
import {getData,postData,url} from "./Config";

const getUsers = () => getData(Links.USERS);

const getPosts = () => getData(Links.POSTS);

const postPosts = (params) => postData(Links.POSTS, params);

const postUsers = (params) => postData(Links.USERS, params);

export { getPosts, getUsers, postPosts, postUsers };
