import { ResumeConstants } from "./constants";
import {
  BaseAction,
  ActionGeneratorType0,
  ActionGeneratorType1
} from "../types";
import { ApiErrorType } from "../../api";
import { ResumeContentGroupType } from "../../components/Resume";

export interface FetchResumeDataRequestAction
  extends BaseAction<typeof ResumeConstants.FETCH_RESUME_DATA_REQUEST> {}

export interface FetchResumeDataSuccessAction
  extends BaseAction<typeof ResumeConstants.FETCH_RESUME_DATA_SUCCESS> {
  payload: Array<ResumeContentGroupType>;
}

export interface FetchResumeDataFailedAction
  extends BaseAction<typeof ResumeConstants.FETCH_RESUME_DATA_FAILED> {
  error: ApiErrorType;
}

export type FetchResumeDataActionType =
  | FetchResumeDataRequestAction
  | FetchResumeDataSuccessAction
  | FetchResumeDataFailedAction;

export type FetchResumeDataRequestType = ActionGeneratorType0<
  FetchResumeDataRequestAction
>;

export type FetchResumeDataSuccessType = ActionGeneratorType1<
  Array<ResumeContentGroupType>,
  FetchResumeDataSuccessAction
>;

export type FetchResumeDataFailedType = ActionGeneratorType1<
  ApiErrorType,
  FetchResumeDataFailedAction
>;

export interface ResumeState {
  data: Array<ResumeContentGroupType>;
  error?: ApiErrorType;
}
