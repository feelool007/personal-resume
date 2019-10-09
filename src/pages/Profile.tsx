import React from "react";
import { connect } from "react-redux";
import { Grid } from "@material-ui/core";

import { Picture } from "../components/Picture";
import { CProfileCard } from "../containers/ProfileCard";
import { fetchProfileDataRequest } from "../store/profile/actions";

export interface PPageProfile {
  fetchProfile: () => void;
}

class PageProfile extends React.Component<PPageProfile> {
  componentDidMount = () => {
    this.props.fetchProfile();
  };

  render = () => {
    return (
      <Grid container spacing={4}>
        <Grid item xs={12} lg={6}>
          <Picture
            rounded
            roundRadius="40%"
            width={360}
            height={360}
            rotate="90deg"
            scale="1.3"
            offsetX="40%"
            offsetY="60%"
            src="/resource/image/profile/img002.jpg"
          />
        </Grid>
        <Grid item xs={12} lg={6}>
          <CProfileCard />
        </Grid>
      </Grid>
    );
  };
}

export default connect<{}, Pick<PPageProfile, "fetchProfile">, {}>(
  undefined,
  dispatch => ({
    fetchProfile: () => dispatch(fetchProfileDataRequest())
  })
)(PageProfile);
