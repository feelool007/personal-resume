import React from "react";
import { withStyles, Divider, Grid } from "@material-ui/core";

import { PResumeContainer } from "./types";
import styles from "./styles";
import ResumeContentGroup from "./ResumeContentGroup";

class ResumeContainer extends React.Component<PResumeContainer> {
  render = () => {
    const { data, classes } = this.props;
    return (
      <Grid container direction="column" className={classes.resumeContainer}>
        {data.map((d, index) => {
          return (
            <Grid key={index} container>
              <ResumeContentGroup data={d} />
              {/* Add divider at bottom if not the last content. */}
              {index < data.length - 1 && (
                <Divider className={classes.groupDivider} />
              )}
            </Grid>
          );
        })}
      </Grid>
    );
  };
}

export default withStyles(styles)(ResumeContainer);
