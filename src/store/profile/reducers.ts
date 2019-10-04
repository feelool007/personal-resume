import { ProfileConstants } from "./constants";
import { ProfileState, FetchProfileDataActionType } from "./types";

const defaultState: ProfileState = {
  data: []
};

export default (
  state = defaultState,
  action: FetchProfileDataActionType
): ProfileState => {
  switch (action.type) {
    case ProfileConstants.FETCH_PROFILE_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload
      };

    case ProfileConstants.FETCH_PROFILE_DATA_FAILED:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
};
