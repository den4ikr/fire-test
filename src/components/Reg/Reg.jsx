const Reg = (props) => {

    const {
        email,
        password,
        setEmail,
        setPassword,
        handleLogin,
        handleSignUp,
        handleLogout,
        emailError,
        passwordError,
        hasAccount,
        setHasAccount,
    } = props;

    const onEmailChange = (e) => {
        props.setEmail (e.target.value);
    }

    const onPasswordChange = (e) => {
        props.setPassword (e.target.value)
    }

    return (
        <div>
            <div>
                <input onChange={onEmailChange} type="text" value={email} />
            </div>
            <div>
                {props.emailError}
            </div>
            <div>
                <input onChange={onPasswordChange} type="password" value={password} />
            </div>
            <div>
                {passwordError}
            </div>
            <div>
                { hasAccount
                    ? <div>
                        <div>
                            <button onClick={handleLogin} >Login</button>
                        </div>
                        <div>
                            Dont have an account? <b onClick={ () => {setHasAccount (!hasAccount)} } >Sign Up</b>
                        </div>
                      </div>
                    : <div>
                        <div>
                            <button onClick={handleSignUp} >Sign Up</button>
                        </div>
                        <div>
                            Have an account? <b onClick={ () => {setHasAccount (!hasAccount)} } >Login</b>
                        </div>
                      </div>
                }
            </div>
        </div>
    )
}

export default Reg;
