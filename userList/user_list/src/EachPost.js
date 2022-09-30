import { useNavigate } from "react-router-dom";

const UserRow = (props) => {
    const navigate  = useNavigate();
    const view = event => {
        const id = event.target.getAttribute('postid');
        navigate('/post/'+(id+""))
    }
    return (
        
        <tbody>
            {props.rows.map( row => {
                return <tr key = {row.id}>
                            <td> {row.id} </td>
                            <td> {row.userId} </td>
                            <td> {row.title} </td>
                            <td> <button className="waves-effect waves-light btn red" postid = {row.id} onClick={ props.deleteItem } >Delete</button></td>
                            <td> <button className="waves-effect waves-light btn blue" postid = {row.id} onClick ={ view }>view</button></td>

                        </tr>
                        
            } )}
        </tbody>
    );
}
 
export default UserRow;