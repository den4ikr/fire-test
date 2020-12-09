import Login from "./Login";
import {connect} from "react-redux";
import { login, logout, singUp } from "../../redux/auth-reducer";

const LoginContainer = (props) => {
    return (
        <Login { ...props } />
    )
}

let mapStateToProps = (state) => {
    return {
        user: state.auth.user,
        email: state.auth.email,
        password: state.auth.password,
        emailError: state.auth.emailError,
        passwordError: state.auth.passwordError,
        hasAccount: state.auth.hasAccount,
    }
}

export default connect (mapStateToProps, {login, logout, singUp} )(LoginContainer);