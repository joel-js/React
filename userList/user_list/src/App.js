import {BrowserRouter,Navigate,Routes,Route} from 'react-router-dom'
import './App.css';
import UserDetail from './UserDetail';
import UserList from './UserList';
import AddUser from './AddUser';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ='/' element={ <Navigate to='/userList' /> } />
          <Route path ='/userlist' element={ <UserList />} />
          <Route path ='/userlist/:id' element={ <UserDetail /> } />
          <Route path ='/add' element={ <AddUser /> } />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
