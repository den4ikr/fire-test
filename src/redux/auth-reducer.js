import fire from "../Fire/fire";

const SET_AUTH_SUER_DATA = "SET_AUTH_SUER_DATA";
const SET_EMAIL_ERROR = "SET_EMAIL_ERROR";
const SET_PASSWORD_ERROR = "SET_PASSWORD_ERROR";
const SET_USER = "SET_USER";
const SET_HAS_ACCOUNT = "SET_HAS_ACCOUNT";

let initialState = {
    email: "",
    password: "",
    hasAccount: false,
    emailError: null,
    passwordError: null,
    user: null,
}

const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_SUER_DATA:
            return { ...state, data: action.data };
        case SET_EMAIL_ERROR:
            return { ...state, emailError: action.emailError };
        case SET_PASSWORD_ERROR:
            return { ...state, passwordError: action.passwordError };
        case SET_USER:
            return { ...state, user: action.user };
default:
    return state;
}
}

export const setAuthUserData = (email, login, isAuth) => ( { type: SET_AUTH_SUER_DATA, data: {email, login, isAuth} } );

export const setEmailError = (emailError) => ( { type: SET_EMAIL_ERROR, emailError } );

export const setPasswordError = (passwordError) => ( { type: SET_PASSWORD_ERROR, passwordError } );

export const setUser = (user) => ( { type: SET_USER, user } );

export const login = (email, password) => async (dispatch) => {
    fire
        .auth ()
        .signInWithEmailAndPassword(email, password)
        .catch (err => {
            switch (err.code) {
                case "auth/invalid-email":
                case "auth/user-disabled":
                case "auth/user-not-found":
                    setEmailError(err.message);
                    break;
                case "auth/wrong-password":
                    setPasswordError(err.message);
                    break;
            }
        })
}

export const logout = () => async (dispatch) => {
    fire.auth().signOut();
}

export const singUp = (email, password) => async (dispatch) => {
    debugger
    fire
        .auth ()
        .createUserWithEmailAndPassword(email, password)
        .catch (err => {
            switch (err.code) {
                case "auth/email-already-in-use":
                case "auth/invalid-email":
                    setEmailError(err.message);
                    break;
                case "auth/weak-password":
                    setPasswordError(err.message);
                    break;
            }
        })
}


export default  AuthReducer;