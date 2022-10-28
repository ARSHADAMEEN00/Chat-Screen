import { call, put, takeEvery } from "redux-saga/effects"

// Login Redux States
import { LOGIN_USER, LOGOUT_USER } from "./actionTypes"
import { apiError } from "./actions"
import { post } from "../../../helpers/api_helper"

const loginApi = user => {
  console.log("user", user)
  return post("/account/login/", user)
}

function* loginUser({ payload }) {
  console.log("payload", payload)
  try {
    // const response = yield call(your api here)
    const response = yield call(loginApi, payload.user)

    console.log("response", response)
    if (user) {
      yield put(loginSuccess(user))
    }
  } catch (error) {
    yield put(apiError(error))
  }
}

// function* logoutUser({ payload: { history } }) {
//   try {
//     localStorage.removeItem("authUser")
//     history.push("/login")
//   } catch (error) {
//     yield put(apiError(error))
//   }
// }

function* authSaga() {
  yield takeEvery(LOGIN_USER, loginUser)
  // yield takeEvery(LOGOUT_USER, logoutUser)
}

export default authSaga
