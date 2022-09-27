
import './App.css';
import Login from './Login'
import Home from './Home';
import {useNavigate,BrowserRouter, Route, Routes,Navigate} from 'react-router-dom';
import {useState} from "react"
import CurrentUser from './CurrentUser'
import  Router from './Router'
function App() {


  return (

    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path='/home' element ={<Home />} />  
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
