import { put, takeEvery, call } from "redux-saga/effects";

import { FetchProfileDataRequestAction } from "./types";
import { fetchProfileData } from "../../api/profile";
import { fetchProfileDataSuccess, fetchProfileDataFailed } from "./actions";
import { FETCH_PROFILE_DATA_REQUEST } from "./constants";

function* fetchProfileDataSaga(action: FetchProfileDataRequestAction) {
  try {
    const response = yield call<typeof fetchProfileData>(fetchProfileData);
    yield put(fetchProfileDataSuccess(response.data));
  } catch (error) {
    yield put(fetchProfileDataFailed(error));
  }
}

export function* fetchProfileDataListener() {
  yield takeEvery(FETCH_PROFILE_DATA_REQUEST, fetchProfileDataSaga);
}
