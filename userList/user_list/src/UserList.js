import UserRow from "./UserRow";
import useFetch from "./useFetch";
import { Link } from "react-router-dom";
import { getUsers } from "./Services";
import { useState } from "react";

const UserList = () => {

  // const data = getUsers();
  const [rows,setRows]= useState(getUsers());
  if(rows) console.log("Rows: "+rows);
  // if(data){
  //   setRows(data)
  //   console.log(rows)
  // }

  const deleteItem = (event) => {
    event.preventDefault();
    const id = event.target.getAttribute("postid");
    const newRows = rows.filter((row) => row.id + "" !== id);
    setRows(newRows);
  };
  // console.log(rows);
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
                <th>
                  <Link
                    to="/users/add"
                    className="waves-effect waves-light btn green"
                  >
                    <i className="material-icons left">add</i>Add
                  </Link>
                </th>
              </tr>
            </thead>

            {rows && (
              <UserRow
                rows={rows}
                setRows={setRows}
                deleteItem={deleteItem}
              ></UserRow>
            )}
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserList;
