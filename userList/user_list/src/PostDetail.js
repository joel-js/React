import { Link,useParams } from "react-router-dom";
import Comments from "./Comments";
import useAxios from "./useAxios";

const PostDetail = () => {
    let {id} = useParams();
    const {data:post} = useAxios('https://jsonplaceholder.typicode.com/posts/'+(id+""));

    return (
        <div className="PostDetail">
            <h2>Post detail of {id}</h2>
           
                <div className="row" key ={post?.id}>
                    <div className="col s8 offset-s1">
                        <div className="card white darken-1">
                            <div className="card-content black-text">
                                <span className="card-title">{post?.title}</span>
                                
                                <p> {post?.body} </p>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <Link to="/posts">Go back</Link>
            <Comments postid={id}/>
        </div>
    );
}
 
export default PostDetail;