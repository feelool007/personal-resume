import { ProjectState, FetchProjectDataActionType } from "./types";
import { ProjectConstants } from "./constants";

const defaultState: ProjectState = {
  data: []
};

export default (
  state = defaultState,
  action: FetchProjectDataActionType
): ProjectState => {
  switch (action.type) {
    case ProjectConstants.FETCH_PROJECT_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload
      };

    case ProjectConstants.FETCH_PROJECT_DATA_FAILED:
      return {
        ...state,
        error: action.error
      };

    default:
      return state;
  }
};
