import useAxios from "./useAxios";
import { useMemo } from "react";
const Posts = () => {
    
    const {data:posts} = useAxios('https://jsonplaceholder.typicode.com/posts');

    return (
        <div className="Posts">
            <h2>Posts</h2>
            <p>{posts?.map( post => post.id)}</p>
        </div>
    );
}
 
export default Posts;