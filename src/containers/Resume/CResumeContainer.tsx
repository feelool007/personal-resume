import { connect, MapStateToProps } from "react-redux";

import { AppState } from "../../store/types";
import { ResumeContainer, PResumeContainer } from "../../components/Resume";

const mapStateToProps: MapStateToProps<Pick<PResumeContainer, "data">, {}, AppState> = state => {
  return {
    data: state.resume.data
  };
};

export default connect(
  mapStateToProps,
  undefined
)(ResumeContainer);
