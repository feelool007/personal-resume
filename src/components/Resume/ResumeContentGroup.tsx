import React from "react";
import { withStyles, Avatar, Grid } from "@material-ui/core";

import { PResumeContentGroup } from "./types";
import styles from "./styles";
import ResumeContent from "./ResumeContent";

class ResumeContentGroup extends React.Component<PResumeContentGroup> {
  render = () => {
    const { data, classes } = this.props;
    return (
      <Grid container spacing={2}>
        <Grid item md={2} sm={12}>
          <Avatar className={classes.avatar}>{data.group}</Avatar>
        </Grid>
        <Grid item md={10} sm={12}>
          {data.contents.map((d, index) => {
            return <ResumeContent key={index} data={d} />;
          })}
        </Grid>
      </Grid>
    );
  };
}

export default withStyles(styles)(ResumeContentGroup);
