import React from "react";
import { Link } from "react-router-dom";
import { withStyles, Typography } from "@material-ui/core";
import classNames from "classnames";

import { PNavItem } from "./types";
import styles from "./styles";

class NavItem extends React.Component<PNavItem> {
  static defaultProps = {
    active: false
  };

  render = () => {
    const { to, text, active, classes } = this.props;
    return (
      <Link to={to} className={classes.navItemLink}>
        <Typography
          className={classNames({
            [classes.navItem]: true,
            [classes.navItemActive]: active
          })}
        >
          {text}
        </Typography>
      </Link>
    );
  };
}

export default withStyles(styles)(NavItem);
