import useFetch from "./useFetch";
import Delete from './Delete'
const UserRow = ({ rows,setRows,error }) => {
    const deleteItem = (event) => {
        const newRow = rows.filter( () => event.target)
    }
    return (
        
        <tbody>
            {rows.map( (row) => {
                return <tr key = {row.id}>
                            <td> {row.id} </td>
                            <td> {row.name} </td>
                            <td> {row.age} </td>
                            <td> {row.designation} </td>
                            <td> <button className="waves-effect waves-light btn red" onClick={(event) => {event.preventDefault(); deleteItem(event); } }>Delete</button></td>
                        </tr>
                        
            } )}
        </tbody>
    );
}
 
export default UserRow;