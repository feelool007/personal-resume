import React from "react";
import { withStyles, Divider, Grid } from "@material-ui/core";

import { PResumeContainer } from "./types";
import styles from "./styles";
import ResumeContent from "./ResumeContent";

class ResumeContainer extends React.Component<PResumeContainer> {
  render = () => {
    const { data, classes } = this.props;
    return (
      <Grid container direction="column" className={classes.resumeContainer}>
        {data.map((d, index) => {
          return (
            <React.Fragment key={index}>
              <ResumeContent data={d} />
              {/* Add divider at bottom if not the last content. */}
              {index < data.length - 2 && <Divider />}
            </React.Fragment>
          );
        })}
      </Grid>
    );
  };
}

export default withStyles(styles)(ResumeContainer);
