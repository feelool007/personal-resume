import {
  FETCH_PROFILE_DATA_SUCCESS,
  FETCH_PROFILE_DATA_FAILED
} from "./constants";
import { ProfileState, FetchProfileDataActionType } from "./types";

const defaultState: ProfileState = {
  data: [
    { title: "年齡", body: "邁入而立之年的31歲" },
    { title: "電話", body: "0963-261-272" },
    { title: "Email", body: "feelool007@gmail.com" },
    { title: "婚姻", body: "與Carol Lin結婚" },
    { title: "兵役", body: "於2017/09/08退伍" }
  ]
};

export default (
  state = defaultState,
  action: FetchProfileDataActionType
): ProfileState => {
  switch (action.type) {
    case FETCH_PROFILE_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload
      };

    case FETCH_PROFILE_DATA_FAILED:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
};
