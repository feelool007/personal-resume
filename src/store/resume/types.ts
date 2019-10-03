import {
  FETCH_RESUME_DATA_REQUEST,
  FETCH_RESUME_DATA_SUCCESS,
  FETCH_RESUME_DATA_FAILED
} from "./constants";
import {
  BaseAction,
  ActionGeneratorType0,
  ActionGeneratorType1
} from "../types";
import { ApiErrorType } from "../../api";
import { ResumeContentType } from "../../components/Resume";

export interface FetchResumeDataRequestAction
  extends BaseAction<typeof FETCH_RESUME_DATA_REQUEST> {}

export interface FetchResumeDataSuccessAction
  extends BaseAction<typeof FETCH_RESUME_DATA_SUCCESS> {
  payload: Array<ResumeContentType>;
}

export interface FetchResumeDataFailedAction
  extends BaseAction<typeof FETCH_RESUME_DATA_FAILED> {
  error: ApiErrorType;
}

export type FetchResumeDataActionType =
  | FetchResumeDataRequestAction
  | FetchResumeDataSuccessAction
  | FetchResumeDataFailedAction;

export type FetchResumeDataRequestType = ActionGeneratorType0<FetchResumeDataRequestAction>;

export type FetchResumeDataSuccessType = ActionGeneratorType1<Array<ResumeContentType>, FetchResumeDataSuccessAction>;

export type FetchResumeDataFailedType = ActionGeneratorType1<ApiErrorType, FetchResumeDataFailedAction>;

export interface ResumeState {
  data: Array<ResumeContentType>;
  error?: ApiErrorType;
}
