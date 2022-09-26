import { useEffect, useState } from "react";
import { Link } from 'react-router-dom'

const Login = ({getUserId}) => {
    const [username, setUsername] = useState(null);
    const [password, setPassword] = useState(null);

    useEffect(() =>{
        // console.log(username)
        // console.log(password)
    },[username,password])

    const submitForm = () => {
        getUserId(username,password)
    }

    return (
        <div className="login">
            <div className="row">
                <form className="col s12">
                    <div className="row">
                        <div className="input-field col s4 offset-s4">
                            <input id="username" type="text" onBlur={ (event) => setUsername(event.target.value) }/>
                            <label >user name</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="input-field col s4 offset-s4">
                            <input id="password" type="password" onBlur={ (event) => setPassword(event.target.value) } />
                            <label >password</label>
                        </div>
                    </div>
                    <div className="row">
                   
                    <button className="waves-effect waves-light btn" onClick={ (event) => {event.preventDefault(); submitForm() }}>submit</button>
                    <Link to ='/home'>go to home</Link>
                    </div>
                </form>
            </div>
        </div> 
    );
}
 
export default Login;