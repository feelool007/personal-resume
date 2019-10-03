import {
  FETCH_RESUME_DATA_REQUEST,
  FETCH_RESUME_DATA_SUCCESS,
  FETCH_RESUME_DATA_FAILED
} from "./constants";
import {
  FetchResumeDataRequestType,
  FetchResumeDataSuccessType,
  FetchResumeDataFailedType
} from "./types";

export const fetchResumeDataRequest: FetchResumeDataRequestType = () => ({
  type: FETCH_RESUME_DATA_REQUEST
});

export const fetchResumeDataSuccess: FetchResumeDataSuccessType = payload => ({
  type: FETCH_RESUME_DATA_SUCCESS,
  payload
});

export const fetchResumeDataFailed: FetchResumeDataFailedType = error => ({
  type: FETCH_RESUME_DATA_FAILED,
  error
});
