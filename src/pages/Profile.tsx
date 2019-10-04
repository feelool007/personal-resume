import React from "react";
import { connect } from "react-redux"
import { Typography, Grid } from "@material-ui/core";

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
      <Grid container>
        <Grid item sm={6}>
          <Typography variant="h4">
            This is photo.
          </Typography>
        </Grid>
        <Grid item sm={6}>
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
