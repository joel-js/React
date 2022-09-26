import React,{ useContext } from 'react';
import {currentUser} from './CurrentUser';

const Home = () => {
    const userId = useContext(currentUser);
    console.log("insisde home : "+ userId)
    return (
        <div className="home">
            <h2>Home</h2>
            <br />
            <h2>{userId}</h2>
        </div>
    );
}
 
export default Home;