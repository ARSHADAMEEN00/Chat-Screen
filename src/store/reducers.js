import { combineReducers } from "redux"

// Front
import Layout from "./layout/reducer"

// Authentication
import Login from "./auth/login/reducer"

//Dashboard
import Dashboard from "./dashboard/reducer"
import Chat from './chat/reducer';

const rootReducer = combineReducers({
  Layout,
  Login,
  Dashboard,
  Chat
})

export default rootReducer
