import React from "react";
import { withStyles, Grid, Divider } from "@material-ui/core";

import { PProjectContainer } from "./types";
import styles from "./styles";
import ProjectContent from "./ProjectContent";

class ProjectContainer extends React.Component<PProjectContainer> {
  render = () => {
    const { contents, classes } = this.props;
    return (
      <Grid container direction="column">
        {contents.map((d, index) => {
          return (
            <React.Fragment key={index}>
              <ProjectContent content={d} />
              {index < contents.length - 1 && (
                <Divider className={classes.groupDivider} />
              )}
            </React.Fragment>
          );
        })}
      </Grid>
    );
  };
}

export default withStyles(styles)(ProjectContainer);
