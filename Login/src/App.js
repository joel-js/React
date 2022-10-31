
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import {login} from './redux/actions/login'
function App() {
  const logged_in  = useSelector(state => (state.name.logged_in))
  const dispatch  = useDispatch();
  return (
    <div className="App">
     <h2>Logged : {logged_in?"true":"false"}</h2>
     <button onClick={ () => dispatch(login()) }>Log In</button>
    </div>
  );
}

export default App;
