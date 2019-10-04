import React from "react";
import { withRouter } from "react-router-dom";
import { withStyles } from "@material-ui/core";

import { PNavBar } from "./types";
import styles from "./styles";
import NavItem from "./NavItem";
import { Github } from "../Icons";

class NavBar extends React.Component<PNavBar> {
  handleLinkToGithub = () => {
    const href = "https://github.com";
    const tab = window.open(href, "_blank");
    if (tab) tab.focus();
  };

  render = () => {
    const { paths, location, classes } = this.props;
    return (
      <div className={classes.navBarContainer}>
        <div className={classes.navBar}>
          {paths.map((p, index) => {
            return (
              <NavItem
                key={index}
                to={p.to}
                text={p.text}
                active={p.to === location.pathname}
              />
            );
          })}
        </div>
        <div className={classes.navBarActions}>
          {/* <Pdf className={classes.navBarActionsIcon} /> */}
          <Github
            className={classes.navBarActionsIcon}
            onClick={this.handleLinkToGithub}
          />
        </div>
      </div>
    );
  };
}

export default withStyles(styles)(withRouter(NavBar));
