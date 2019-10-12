import React from "react";
import { withStyles, Typography, Grid } from "@material-ui/core";

import { PProjectDescription } from "./types";
import styles from "./styles";
import { Github } from "../Icons";

class ProjectDescription extends React.Component<PProjectDescription> {
  handleGotoRepository = () => {
    const { repositoryUrl } = this.props;
    const tab = window.open(repositoryUrl, "_blank");
    if (tab) tab.focus();
  };

  render = () => {
    const { name, description, repositoryUrl, classes } = this.props;
    return (
      <React.Fragment>
        <Grid container>
          <Typography className={classes.title}>{name}</Typography>
          {repositoryUrl && (
            <Github className={classes.icon} onClick={this.handleGotoRepository} />
          )}
        </Grid>
        <Typography className={classes.body}>
          {description}
        </Typography>
      </React.Fragment>
    );
  };
}

export default withStyles(styles)(ProjectDescription);
