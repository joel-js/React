import { useNavigate } from "react-router-dom";

const UserRow = ({ rows, setRows, error, deleteItem }) => {
    const navigate  = useNavigate();
    return (
        
        <tbody>
            {rows.map( row => {
                return <tr key = {row.id}>
                            <td> {row.id} </td>
                            <td> {row.name} </td>
                            <td> {row.age} </td>
                            <td> {row.designation} </td>
                            <td> <button className="waves-effect waves-light btn red" postid = {row.id} onClick={ deleteItem } >Delete</button></td>
                            <td> <button className="waves-effect waves-light btn blue" postid = {row.id} onClick ={ () => navigate('/user/'+(row.id+"")) }>view</button></td>

                        </tr>
                        
            } )}
        </tbody>
    );
}
 
export default UserRow;