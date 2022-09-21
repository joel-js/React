import { useParams } from "react-router-dom";
import useFetch from "./useFetch";


const Detail = () => {
    const {id} = useParams();
    const {data:detail,isPending,error} = useFetch('http://localhost:8000/blogs/'+id);
    return (
        <div className="detail">
            { error && <div> {error} </div> }
            { isPending && <div> Loading... </div> }
            { detail && <div>
                            <h2> {detail.title} </h2>
                            <br />
                            <h4>written by {detail.author}</h4>
                            <br />
                            <p> {detail.body} </p>
                        </div> 
            }
        </div>
    );
}
 
export default Detail;