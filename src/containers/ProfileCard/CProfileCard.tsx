import { connect } from "react-redux";

import { AppState } from "../../store/types";
import { ProfileCard } from "../../components/ProfileCard";

export default connect(
  (state: AppState) => ({
    data: state.profile.data
  }),
  undefined
)(ProfileCard)
