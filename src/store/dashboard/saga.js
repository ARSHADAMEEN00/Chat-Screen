import { call, put, takeEvery, all, fork } from "redux-saga/effects"

// Crypto Redux States
import { GET_CHARTS_DATA } from "./actionTypes"
import { apiSuccess, apiFail } from "./actions"

const chartApi = () => {
  return
  //your api here
}

function* getChartsData({ payload: periodType }) {
  try {
    const response = yield call(chartApi, periodType)
    yield put(apiSuccess(GET_CHARTS_DATA, response))
  } catch (error) {
    yield put(apiFail(GET_CHARTS_DATA, error))
  }
}

export function* watchGetChartsData() {
  yield takeEvery(GET_CHARTS_DATA, getChartsData)
}

function* dashboardSaga() {
  yield all([fork(watchGetChartsData)])
}

export default dashboardSaga
