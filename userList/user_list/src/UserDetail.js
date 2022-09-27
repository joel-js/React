import { Link,useParams } from "react-router-dom";
const UserDetail = () => {
    const {id} = useParams();
    return (
        <div className="userDetail">
            <h2>UserDetail</h2>
            <h3>{id}</h3>
            <Link to="/">Go back</Link>
        </div>
    );
}
 
export default UserDetail;