
import './App.css';
import Login from './Login'
import Home from './Home';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {createContext} from "react"

function App() {
  const currentUser = createContext(null)

  const getUserId = (id,pass) => {
    console.log(id)
    console.log(pass);
  }
  return (

    <div className="App">
      
      <Router>
        <Switch>
          <Route exact path="/"> <Login getUserId = {getUserId}/> </Route>
          
          <Route exact path="/home"> <Home /> </Route>
        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
