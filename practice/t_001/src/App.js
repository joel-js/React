import Home from './Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Cupboard from './Cupboard';
import Room from './Room';
function App() {
  return (
    <div className="App">
      
      <div className="row">
        <Router>
          <Switch>
            <Route exact path='/'> <Home /> </Route>
        </Switch>
        <Switch>
          <Route exact path='/room'> <Room /> </Route>
        </Switch>
        <Switch>
        <Route exact path='/cupboard'> <Cupboard /> </Route>
        </Switch>
        </Router>
      </div>    
    </div>
  );
}

export default App;

