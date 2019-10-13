import React from "react";
import { connect, MapDispatchToProps } from "react-redux";

import { CResumeContainer } from "../containers/Resume";
import { fetchResumeDataRequest } from "../store/resume/actions";

export interface PPageResume {
  fetchResume: () => void;
}

class PageResume extends React.Component<PPageResume> {
  componentDidMount = () => {
    this.props.fetchResume();
  };

  render = () => {
    return (
      // @ts-ignore
      <CResumeContainer />
    );
  };
}

const mapDispatchToProps: MapDispatchToProps<
  Pick<PPageResume, "fetchResume">,
  {}
> = dispatch => ({
  fetchResume: () => dispatch(fetchResumeDataRequest())
});

export default connect(
  undefined,
  mapDispatchToProps
)(PageResume);
