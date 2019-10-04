import { ResumeConstants } from "./constants";
import {
  FetchResumeDataRequestType,
  FetchResumeDataSuccessType,
  FetchResumeDataFailedType
} from "./types";

export const fetchResumeDataRequest: FetchResumeDataRequestType = () => ({
  type: ResumeConstants.FETCH_RESUME_DATA_REQUEST
});

export const fetchResumeDataSuccess: FetchResumeDataSuccessType = payload => ({
  type: ResumeConstants.FETCH_RESUME_DATA_SUCCESS,
  payload
});

export const fetchResumeDataFailed: FetchResumeDataFailedType = error => ({
  type: ResumeConstants.FETCH_RESUME_DATA_FAILED,
  error
});
