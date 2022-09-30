import useAxios from "./useAxios";

const Comments = ({postid}) => {
    const {data:comments} = useAxios('https://jsonplaceholder.typicode.com/posts/'+(postid+"")+'/comments');
    return (
        <div className="Comments">
            <h2>Comments of {postid}</h2>
            {comments?.map( comment => {
                return <div className="row" key ={comment.id}>
                            <div className="col s8 offset-s1">
                                <div className="card white darken-1">
                                    <div className="card-content black-text">
                                        <span className="card-title">{comment.name}</span>
                                        <span> <b> {comment.email} </b> </span>
                                        <p> {comment.body} </p>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
            })}
            
        
        </div>
    );
}
 
export default Comments;