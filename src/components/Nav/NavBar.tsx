import React from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core";

import { PNavBar } from "./types";
import styles from "./styles";
import NavItem from "./NavItem";
import { Github, Pdf } from "../Icons";

class NavBar extends React.Component<PNavBar> {
  render = () => {
    const { paths, location, classes } = this.props;
    return (
      <div className={classes.navBarContainer}>
        <div className={classes.navBar}>
          {paths.map((p, index) => {
            return <NavItem key={index} to={p.to} text={p.text} active={p.to === location.pathname} />;
          })}
        </div>
        <div className={classes.navBarActions}>
          {/* <Pdf className={classes.navBarActionsIcon} /> */}
          <a target="_blank" href="https://github.com/">
            <Github className={classes.navBarActionsIcon} />
          </a>
        </div>
      </div>
    );
  };
}

export default withStyles(styles)(withRouter(NavBar));
