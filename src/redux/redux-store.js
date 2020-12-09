import {applyMiddleware, combineReducers, createStore} from "redux";
import AuthReducer from "./auth-reducer";
import thunkMiddelware from "redux-thunk";

let reducers = combineReducers({
    auth: AuthReducer,
})

const store = createStore (reducers, applyMiddleware(thunkMiddelware));

export default store;

