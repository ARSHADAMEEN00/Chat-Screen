import { put, takeEvery,call } from "redux-saga/effects"

// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from "./actionTypes"
import { apiError } from "./actions"
import {post} from "../../../helpers/api_helper" 

const loginApi =(user)=>{
return post('/account/login/',user)
}

function* loginUser({ payload: { user, history } }) {
  
  try {
    history.push("/dashboard")
    // const response = yield call(your api here)
   const response = yield call(loginApi,user)

   console.log(response);

    
  } catch (error) {
    yield put(apiError(error))
  }
}

function* logoutUser({ payload: { history } }) {
  try {
    localStorage.removeItem("authUser")
    history.push("/login")
  } catch (error) {
    yield put(apiError(error))
  }
}

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser)
  yield takeEvery(LOGOUT_USER, logoutUser)
}

export default authSaga