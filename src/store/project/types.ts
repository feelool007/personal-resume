import { ProjectConstants } from "./constants";
import {
  BaseAction,
  ActionGeneratorType0,
  ActionGeneratorType1
} from "../types";
import { ApiErrorType } from "../../api";
import { ProjectType } from "../../components/Project";

export interface FetchProjectDataRequestAction
  extends BaseAction<typeof ProjectConstants.FETCH_PROJECT_DATA_REQUEST> {}

export interface FetchProjectDataSuccessAction
  extends BaseAction<typeof ProjectConstants.FETCH_PROJECT_DATA_SUCCESS> {
  payload: Array<ProjectType>;
}

export interface FetchProjectDataFailedAction
  extends BaseAction<typeof ProjectConstants.FETCH_PROJECT_DATA_FAILED> {
  error: ApiErrorType;
}

export type FetchProjectDataActionType =
  | FetchProjectDataRequestAction
  | FetchProjectDataSuccessAction
  | FetchProjectDataFailedAction;

export type FetchProjectDataRequestType = ActionGeneratorType0<FetchProjectDataRequestAction>;

export type FetchProjectDataSuccessType = ActionGeneratorType1<Array<ProjectType>, FetchProjectDataSuccessAction>;

export type FetchProjectDataFailedType = ActionGeneratorType1<ApiErrorType, FetchProjectDataFailedAction>;

export interface ProjectState {
  data: Array<ProjectType>;
  error?: ApiErrorType;
}
