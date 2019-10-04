import { BaseAction, ActionGeneratorType0, ActionGeneratorType1 } from "../types";
import { FETCH_PROFILE_DATA_REQUEST, FETCH_PROFILE_DATA_SUCCESS, FETCH_PROFILE_DATA_FAILED } from "./constants";
import { ApiErrorType } from "../../api";
import { ProfileType } from "../../components/ProfileCard";

export interface FetchProfileDataRequestAction extends BaseAction<typeof FETCH_PROFILE_DATA_REQUEST> {}

export interface FetchProfileDataSuccessAction extends BaseAction<typeof FETCH_PROFILE_DATA_SUCCESS> {
  payload: Array<ProfileType>;
}

export interface FetchProfileDataFailedAction extends BaseAction<typeof FETCH_PROFILE_DATA_FAILED> {
  error?: ApiErrorType;
}

export type FetchProfileDataActionType =
  | FetchProfileDataRequestAction
  | FetchProfileDataSuccessAction
  | FetchProfileDataFailedAction;

export type FetchProfileDataRequestType = ActionGeneratorType0<FetchProfileDataRequestAction>;

export type FetchProfileDataSuccessType = ActionGeneratorType1<Array<ProfileType>, FetchProfileDataSuccessAction>;

export type FetchProfileDataFailedType = ActionGeneratorType1<ApiErrorType, FetchProfileDataFailedAction>;

export interface ProfileState {
  data: Array<ProfileType>;
  error?: ApiErrorType;
}
