import React from "react";
import { withStyles } from "@material-ui/core";
import { Copyright } from "@material-ui/icons";
import moment from "moment";

import { PFooter } from "./types";
import styles from "./styles";

class Footer extends React.Component<PFooter> {
  render = () => {
    const { classes } = this.props;
    return (
      <div className={classes.footer}>
        <Copyright style={{ fontSize: 18 }} />
        {"\u00A0"}
        {moment().year() + " by KaiLin, Cho."}
      </div>
    );
  };
}

export default withStyles(styles)(Footer);
