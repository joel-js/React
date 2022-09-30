import { useParams } from "react-router-dom";
import Comments from "./Comments";

const PostDetail = () => {
    let {id} = useParams();
    return (
        <div className="PostDetail">
            <h2>Post detail of {id}</h2>
            <Comments postid={id}/>
        </div>
    );
}
 
export default PostDetail;