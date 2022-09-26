const Login = () => {
    return (
        <div className="login">
            <div class="row">
                <form class="col s12">
                    <div class="row">
                        <div class="input-field col s4 offset-s4">
                            <input id="username" type="text" class="validate" />
                            <label for="username">user name</label>
                        </div>
                    </div>
                    <div class="row">
                        <div class="input-field col s4 offset-s4">
                            <input id="password" type="password" class="validate" />
                            <label for="password">password</label>
                        </div>
                    </div>
                    <div className="row">
                    <button class="waves-effect waves-light btn" onClick={ (event) => event.preventDefault() }>submit</button>
                    </div>
                </form>
            </div>
        </div> 
    );
}
 
export default Login;