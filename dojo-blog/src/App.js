import './App.css';
import Navbar from './Navbar';
import Home from './Home';
function App() {
  const txt   = "welcome";
  const likes = 50
  // const likes = {name:"jj"} 
  // const likes = true
  // the above lines cause error, as objects and boolean cannot be printed but can be accessed
  return (
    <div className='App'>
      <Navbar></Navbar>
      <div className="content">
        <Home></Home>

      </div>
    </div>
  );
}

export default App;
