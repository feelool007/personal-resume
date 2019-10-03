import React from "react";
import { Typography, Grid } from "@material-ui/core";

import { CProfileCard } from "../containers/ProfileCard";

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
          <CProfileCard />
        </Grid>
      </Grid>
    );
  };
}

export default PageProfile;
