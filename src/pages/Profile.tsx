import React from "react";
import { Typography, Grid } from "@material-ui/core";

import { ProfileCard } from "../components/ProfileCard";

class PageProfile extends React.Component<{}> {
  render = () => {
    return (
      <Grid container>
        <Grid item sm={6}>
          <Typography variant="h4">
            This is photo.
          </Typography>
        </Grid>
        <Grid item sm={6}>
          <ProfileCard />
        </Grid>
      </Grid>
    );
  };
}

export default PageProfile;
