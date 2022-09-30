import {BrowserRouter,Navigate,Routes,Route} from 'react-router-dom'
import './App.css';
import UserDetail from './UserDetail';
import UserList from './UserList';
import AddUser from './AddUser';
import NotFound from './NotFound';
import Posts from './Posts';
import PostDetail from './PostDetail';
import AddPost from './AddPost';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          
          <Route path ='/' element={ <Navigate to='/userList' /> } />
          <Route path ='/userlist' element={ <UserList />} />
          <Route path ='/user/:id' element={ <UserDetail /> } />
          <Route path ='/users/add' element={ <AddUser /> } />
          <Route path ='/posts' element={ <Posts />} />
          <Route path ='/posts/add' element={ <AddPost />} />
          <Route path ='/post/:id' element={ <PostDetail />} />

          <Route path ='*' element={ <NotFound /> } />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
