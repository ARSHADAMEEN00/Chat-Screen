import React from "react"
import { Redirect } from "react-router-dom"

// Profile
import UserProfile from "../pages/Authentication/user-profile"

// Authentication related pages
import Login from "../pages/Authentication/Login"
import Logout from "../pages/Authentication/Logout"
import Register from "../pages/Authentication/Register"
import ForgetPwd from "../pages/Authentication/ForgetPassword"

// Dashboard
import Dashboard from "../pages/Dashboard/index"
import FormElement from './../pages/Dashboard/FormElement';
import WelcomeComp from  './../pages/Dashboard/WelcomeComp';
import LatestTranaction from  './../pages/Dashboard/LatestTranaction';
import MonthlyEarning from './../pages/Dashboard/MonthlyEarnings';
import Order from './../pages/Dashboard/Order';
import Chat from './../pages/Chat/Chat';
import StackedColumnChart from './../pages/Dashboard/StackedColumnChart';



const authProtectedRoutes = [
  { path: "/dashboard", component: Dashboard },

  // //profile
  { path: "/profile", component: UserProfile },
  // FormElement
  { path: "/forms", component: FormElement },

  //Dashboard  welcome
  { path: "/dash", component: WelcomeComp },
  { path: "/transactions", component: LatestTranaction },
  { path: "/monthly", component: MonthlyEarning},
  { path: "/stacked", component: StackedColumnChart},

//chat
{ path: "/chat", component: Chat },

  // this route should be at the end of all other routes
  // eslint-disable-next-line react/display-name
  { path: "/", exact: true, component: () => <Redirect to="/dashboard" /> },
]

const publicRoutes = [
  { path: "/logout", component: Logout },
  { path: "/login", component: Login },
  { path: "/forgot-password", component: ForgetPwd },
  { path: "/register", component: Register },
]

export { publicRoutes, authProtectedRoutes }
