import React from "react";
import { connect, MapDispatchToProps } from "react-redux";

import { CProjectContainer } from "../containers/Project";
import { fetchProjectDataRequest } from "../store/project/actions";

export interface PPageProjects {
  fetchProject: () => void;
}

class PageProjects extends React.Component<PPageProjects> {
  componentDidMount = () => {
    this.props.fetchProject();
  };

  render = () => {
    return (
      // @ts-ignore
      <CProjectContainer />
    );
  };
}

const mapDispatchToProps: MapDispatchToProps<
  Pick<PPageProjects, "fetchProject">,
  {}
> = dispatch => ({
  fetchProject: () => dispatch(fetchProjectDataRequest())
});

export default connect(
  undefined,
  mapDispatchToProps
)(PageProjects);
