import {
  FetchProjectDataRequestType,
  FetchProjectDataSuccessType,
  FetchProjectDataFailedType
} from "./types";
import { ProjectConstants } from "./constants";

export const fetchProjectDataRequest: FetchProjectDataRequestType = () => ({
  type: ProjectConstants.FETCH_PROJECT_DATA_REQUEST
});

export const fetchProjectDataSuccess: FetchProjectDataSuccessType = payload => ({
  type: ProjectConstants.FETCH_PROJECT_DATA_SUCCESS,
  payload
});

export const fetchProjectDataFailed: FetchProjectDataFailedType = error => ({
  type: ProjectConstants.FETCH_PROJECT_DATA_FAILED,
  error
});
