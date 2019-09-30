import React from "react";
import { withStyles } from "@material-ui/core";

import { PContent } from "./types";
import styles from "./styles";

class Content extends React.Component<PContent> {
  render = () => {
    const { children, classes } = this.props;
    return (
      <div className={classes.content}>
        {children}
      </div>
    );
  };
}

export default withStyles(styles)(Content);
