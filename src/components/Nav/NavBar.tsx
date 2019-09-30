import React from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core";

import { PNavBar } from "./types";
import styles from "./styles";
import NavItem from "./NavItem";

class NavBar extends React.Component<PNavBar> {
  render = () => {
    const { paths, location, classes } = this.props;
    return (
      <div className={classes.navBar}>
        {paths.map((p, index) => {
          return <NavItem key={index} to={p.to} text={p.text} active={p.to === location.pathname} />;
        })}
      </div>
    );
  };
}

export default withStyles(styles)(withRouter(NavBar));
