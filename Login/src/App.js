
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { login_request } from './redux/actions/login'
function App() {
  const logged_in   = useSelector(state => state.login.logged_in)
  const user_data   = useSelector(state => state.user.data)
  const dispatch    = useDispatch();
  return (
    <div className="App">
     <h2>Logged : {logged_in?"true":"false"}</h2>
     <button onClick={ () => dispatch(login_request()) }>Log In</button>
     {logged_in && <h2>User Id: {user_data?.id}</h2> }
     {logged_in && <h2>User Name: {user_data?.name}</h2> }

    </div>
  );
}

export default App;
