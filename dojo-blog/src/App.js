
import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Detail from './Detail';
import { CurrentUser } from './UserContext';

function App() {
  
	const txt   = "welcome";
  	const likes = 50
  // const likes = {name:"jj"} 
  // const likes = true
  // the above lines cause error, as objects and boolean cannot be printed but can be accessed
	

  return (
	<Router>
		<div className='App'>
			<Navbar></Navbar>
			<div className="content">
				<CurrentUser.Provider value ="mario">
					<Switch>
						<Route exact path="/"> <Home></Home> </Route>
						<Route exact path="/create"> <Create></Create> </Route>
						<Route path="/blogs/:id"> <Detail></Detail> </Route>
					</Switch>
				</CurrentUser.Provider>
			</div>
		</div>
	</Router>
  );
}

export default App;
