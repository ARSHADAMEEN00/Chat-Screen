import { all, fork } from "redux-saga/effects"

//public
import authSaga from "./auth/login/saga"
import LayoutSaga from "./layout/saga"
import dashboardSaga from "./dashboard/saga"

export default function* rootSaga() {
  yield all([fork(authSaga), fork(LayoutSaga), fork(dashboardSaga)])
}
