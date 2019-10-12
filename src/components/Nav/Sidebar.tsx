import React from "react";
import { withRouter } from "react-router-dom";
import { withStyles, Drawer, List, ListItem } from "@material-ui/core";

import { PSidebar } from "./types";
import styles from "./styles";
import NavItem from "./NavItem";

class Sidebar extends React.Component<PSidebar> {
  render = () => {
    const { paths, location, open, onClose, classes } = this.props;
    return (
      <Drawer
        open={open}
        anchor="right"
        variant="temporary"
        onClose={onClose}
        classes={{
          paper: classes.sidebar
        }}
      >
        <List>
          {paths.map((p, index) => {
            return (
              <ListItem button key={index} onClick={onClose}>
                <NavItem
                  to={p.to}
                  text={p.text}
                  active={p.to === location.pathname}
                />
              </ListItem>
            );
          })}
        </List>
      </Drawer>
    );
  };
}

export default withStyles(styles)(withRouter(Sidebar));
