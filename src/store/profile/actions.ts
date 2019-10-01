import {
  FETCH_PROFILE_DATA_REQUEST,
  FETCH_PROFILE_DATA_SUCCESS,
  FETCH_PROFILE_DATA_FAILED
} from "./constants";

import {
  FetchProfileDataRequestType,
  FetchProfileDataSuccessType,
  FetchProfileDataFailedType
} from "./types";

export const fetchProfileDataRequest: FetchProfileDataRequestType = () => ({
  type: FETCH_PROFILE_DATA_REQUEST
});

export const fetchProfileDataSuccess: FetchProfileDataSuccessType = payload => ({
  type: FETCH_PROFILE_DATA_SUCCESS,
  payload
});

export const fetchProfileDataFailed: FetchProfileDataFailedType = error => ({
  type: FETCH_PROFILE_DATA_FAILED,
  error
});
