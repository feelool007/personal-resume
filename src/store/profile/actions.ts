import { ProfileConstants } from "./constants";

import {
  FetchProfileDataRequestType,
  FetchProfileDataSuccessType,
  FetchProfileDataFailedType
} from "./types";

export const fetchProfileDataRequest: FetchProfileDataRequestType = () => ({
  type: ProfileConstants.FETCH_PROFILE_DATA_REQUEST
});

export const fetchProfileDataSuccess: FetchProfileDataSuccessType = payload => ({
  type: ProfileConstants.FETCH_PROFILE_DATA_SUCCESS,
  payload
});

export const fetchProfileDataFailed: FetchProfileDataFailedType = error => ({
  type: ProfileConstants.FETCH_PROFILE_DATA_FAILED,
  error
});
