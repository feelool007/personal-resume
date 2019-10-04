import {
  FETCH_RESUME_DATA_SUCCESS,
  FETCH_RESUME_DATA_FAILED
} from "./constants";

import { FetchResumeDataActionType, ResumeState } from "./types";

const defaultState: ResumeState = {
  data: []
};

export default (
  state = defaultState,
  action: FetchResumeDataActionType
): ResumeState => {
  switch (action.type) {
    case FETCH_RESUME_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload
      };

    case FETCH_RESUME_DATA_FAILED:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
};
