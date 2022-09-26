
import './App.css';
import Login from './Login'
import Home from './Home';
import {useNavigate,BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {useState} from "react"
import {currentUser} from './CurrentUser'

function App() {

  const navigate = useNavigate()
  const [userId,setUserId] = useState('abc');

  const getUserId = (id,pass) => {
    console.log("1 "+id)
    setUserId(id)

    navigate('/home')
    
  }
  console.log("userId is "+userId);

  return (

    <div className="App">
      <h1>{userId}</h1>
      <Router>
        <Routes>
          
          <Route exact path="/"> <Login getUserId = {getUserId}/> </Route>

          <currentUser.Provider value = {userId}> 
            <Route exact path="/home"> <Home userId ={userId}/> </Route>
          </currentUser.Provider>   

        </Routes>
        
      </Router>
    </div>
  );
}

export default App;
