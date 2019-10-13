import { connect, MapStateToProps } from "react-redux";

import { AppState } from "../../store/types";
import { ProjectContainer, PProjectContainer } from "../../components/Project";

const mapStateToProps: MapStateToProps<
  Pick<PProjectContainer, "contents">,
  {},
  AppState
> = state => ({
  contents: state.project.data
});

export default connect(
  mapStateToProps,
  undefined
)(ProjectContainer);
