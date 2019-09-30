import React from "react";
import { withStyles, Typography } from "@material-ui/core";

import { PHeader } from "./types";
import styles from "./styles";

class Header extends React.Component<PHeader> {
  render = () => {
    const { children, classes } = this.props;
    return (
      <div className={classes.header}>
        <div className={classes.headerTitle}>
          <Typography variant="h3" color="initial">
            卓楷霖
          </Typography>
          <Typography variant="body2" color="initial">
            一位在前端打滾的專職碼農
          </Typography>
        </div>
        {children}
      </div>
    );
  };
}

export default withStyles(styles)(Header);
