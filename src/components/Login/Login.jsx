import {useEffect, useState} from "react";

const Login = (props) => {

    useEffect( () => {
        props.authListener ()
    }, [] )

    const [ password, setPassword ] = useState(props.password);
    const [ email, setEmail ] = useState(props.email);
    const [ hasAccount, setHasAccount ] = useState(false);

    const onEmailChange = (e) => {
        setEmail (e.target.value)
    }

    const onPasswordChange = (e) => {
        setPassword (e.target.value);
    }

    const signUp = () => {
        props.login ()
    }

    return (
        <div>
            <div>
                Login
            </div>
            <div>
                <input onChange={onEmailChange} type="email" value={email} />
            </div>
            <div>
                <input onChange={onPasswordChange} type="password" value={password} />
            </div>
            { hasAccount
                ? <div>
                    <div>
                        <button>LogIn</button>
                    </div>
                    <div>
                        Dont have an Account <b onClick={ () => { setHasAccount (!hasAccount) } } >Register</b>
                    </div>
                  </div>
                : <div>
                    <div>
                        <button>Sign Up</button>
                    </div>
                    <div>
                        Have an Account <b onClick={ () => { setHasAccount (!hasAccount) } } >Login</b>
                    </div>
                  </div>
            }
        </div>
    )
}

export default Login;