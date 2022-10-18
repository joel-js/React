import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "./usersSlice";
import { colorGuide } from '@cred/neopop-web/lib/primitives';
import { Tag } from '@cred/neopop-web/lib/components';

const UsersView = () => {

  const users     = useSelector( (state) => state.users )
  const dispatch  = useDispatch()
  useEffect(() => {
    dispatch(getUsers())
  },[])

  return (
    <div className="UsersView">
      <h2>List of users</h2>
      <div>
        <ul>
          {users.loading  && <Tag colorConfig={colorGuide.darkComponents.tags.warning}>Loading... (light)</Tag>}
          {!users.loading && users.error ?<Tag colorConfig={colorGuide.darkComponents.tags.error}>{users.error}</Tag>: null}
          {!users.loading && users.users.map((user) => <li key = {user.id}> {user.name} </li> )}
        </ul>
      </div>
    </div>
  );
}
 
export  {UsersView};