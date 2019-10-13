import { call, put, takeEvery } from "redux-saga/effects";

import { fetchProjectData } from "../../api/project";
import { fetchProjectDataSuccess, fetchProjectDataFailed } from "./actions";
import { ProjectConstants } from "./constants";

function* fetchProjectDataSaga() {
  try {
    const response = yield call(fetchProjectData);
    yield put(fetchProjectDataSuccess(response.data));
  } catch (error) {
    yield put(fetchProjectDataFailed(error));
  }
}

export function* fetchProjectDataSagaListener() {
  yield takeEvery(
    ProjectConstants.FETCH_PROJECT_DATA_REQUEST,
    fetchProjectDataSaga
  );
}
