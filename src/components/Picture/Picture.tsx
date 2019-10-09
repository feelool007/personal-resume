import React from "react";
import { withStyles } from "@material-ui/core";

import { PPicture } from "./types";
import styles from "./styles";

class Picture extends React.Component<PPicture> {
  static defaultProps: Partial<PPicture> = {
    width: "100%",
    height: "100%",
    rounded: false,
    roundRadius: "40%",
    rotate: "0deg",
    scale: 1,
    offsetX: "0px",
    offsetY: "0px"
  };

  render = () => {
    const { classes } = this.props;
    return (
      <div className={classes.container}>
        <div className={classes.cardMedia} />
      </div>
    );
  };
}

export default withStyles(styles)(Picture);
