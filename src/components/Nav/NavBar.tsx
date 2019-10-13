import React from "react";
import { withRouter } from "react-router-dom";
import { withStyles, Hidden } from "@material-ui/core";
import { Menu } from "@material-ui/icons";

import { PNavBar, SNavBar } from "./types";
import styles from "./styles";
import NavItem from "./NavItem";
import Sidebar from "./Sidebar";
import { Github } from "../Icons";

class NavBar extends React.Component<PNavBar, SNavBar> {
  constructor(props: PNavBar) {
    super(props);
    this.state = {
      sidebarOpen: false
    };
  }

  handleToggleSidebar = () => {
    this.setState(prevState => ({
      sidebarOpen: !prevState.sidebarOpen
    }));
  };

  handleLinkToGithub = () => {
    const href = "https://github.com/feelool007";
    const tab = window.open(href, "_blank");
    if (tab) tab.focus();
  };

  render = () => {
    const { paths, location, classes } = this.props;
    const { sidebarOpen } = this.state;
    return (
      <div className={classes.navBarContainer}>
        <Hidden xsDown>
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
        </Hidden>
        <Hidden smUp>
          <div className={classes.navBarActions}>
            <Menu
              className={classes.navBarActionsIcon}
              onClick={this.handleToggleSidebar}
            />
          </div>
          <Sidebar
            open={sidebarOpen}
            paths={paths}
            onClose={this.handleToggleSidebar}
          />
        </Hidden>
      </div>
    );
  };
}

export default withStyles(styles)(withRouter(NavBar));
