import { Link,useParams } from "react-router-dom";
import useFetch from "./useFetch";
const UserDetail = () => {
    let {id} = useParams();
    
    console.log(typeof(id))
    // id +=""
    const { data: data} = useFetch('http://localhost:8000/userlist/'+id)
    let userData =data
    // if(data){
    //     console.log(data.id)
    // }
    console.log(data?.id);
    return (
        <div className="userDetail">
            <h2>UserDetail</h2>
            <h3>{id}</h3>
            <div>
                <h6>id : {id}</h6> <br />
                <h6>name : {data?.name}</h6> <br />
                <h6>age: {data?.age}</h6> <br />
                <h6>designation : {data?.designation}</h6> <br />
            </div>
            <Link to="/">Go back</Link>
        </div>
    );
}
 
export default UserDetail;