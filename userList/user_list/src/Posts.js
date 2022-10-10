
import { Link } from "react-router-dom";
import EachPost from "./EachPost"
import PostsContainer from "./PostsContainer";

const Posts = () => {
    
    const {rows,deleteItem} = PostsContainer();
   
    return (
        <div className="Posts">
            <h2>Posts</h2>
            <div className="row">
                <div className="col s8 offset-s2">
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>User Id</th>
                                <th>Post</th>
                                <th><Link to="/posts/add" className='waves-effect waves-light btn green'><i className="material-icons left">add</i>Add</Link></th>
                            </tr>
                        </thead>
                        { rows && <EachPost rows={ rows } deleteItem= {deleteItem}></EachPost>}
                    </table>
                </div>
            </div>
        </div>
    );
}
 
export default Posts;