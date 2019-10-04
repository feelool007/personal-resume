import { put, takeEvery, call } from "redux-saga/effects";

import { fetchProfileData } from "../../api/profile";
import { fetchProfileDataSuccess, fetchProfileDataFailed } from "./actions";
import { ProfileConstants } from "./constants";

function* fetchProfileDataSaga() {
  try {
    const response = yield call<typeof fetchProfileData>(fetchProfileData);
    yield put(fetchProfileDataSuccess(response.data));
  } catch (error) {
    yield put(fetchProfileDataFailed(error));
  }
}

export function* fetchProfileDataListener() {
  yield takeEvery(ProfileConstants.FETCH_PROFILE_DATA_REQUEST, fetchProfileDataSaga);
}
