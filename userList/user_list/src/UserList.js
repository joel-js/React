

import UserRow from './UserRow';
import useFetch from "./useFetch";

const UserList = () => {
    const { data: rows,setData:setRows,error} = useFetch('http://localhost:8000/userlist')

    return (
        <div className="userList">
            <h2>User List</h2>
            
            <div className="row">
                <div className="col s8 offset-s2">
                    <table>
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Age</th>
                                <th>Designation</th>
                                <th><button className='waves-effect waves-light btn green'><i className="material-icons left">add</i>Add</button></th>
                            </tr>
                        </thead>

                        
                        { rows && <UserRow rows={ rows } setRows ={ setRows } ></UserRow>}
                        
                    </table>
                </div>
            </div>
             
        </div>
    );
}
 
export default UserList;