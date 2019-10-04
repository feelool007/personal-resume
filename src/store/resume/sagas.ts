import { call, put, takeEvery } from "redux-saga/effects";

import { fetchResumeData } from "../../api/resume";
import { fetchResumeDataSuccess, fetchResumeDataFailed } from "./actions";
import { ResumeConstants } from "./constants";

function* fetchResumeDataSaga() {
  try {
    const respones = yield call(fetchResumeData);
    yield put(fetchResumeDataSuccess(respones.data));
  } catch (error) {
    yield put(fetchResumeDataFailed(error));
  }
}

export function* fetchResumeDataSagaListener() {
  yield takeEvery(ResumeConstants.FETCH_RESUME_DATA_REQUEST, fetchResumeDataSaga);
}
