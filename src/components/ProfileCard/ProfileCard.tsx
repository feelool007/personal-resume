import React from "react";
import { withStyles, Card, CardContent, Typography } from "@material-ui/core";

import { PProfileCard } from "./types";
import styles from "./styles";

class ProfileCard extends React.Component<PProfileCard> {
  render = () => {
    const { classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          <div className={classes.container}>
            <Typography className={classes.title}>
              年齡
            </Typography>
            <Typography className={classes.body}>
              邁入而立之年的31歲
            </Typography>
          </div>
          <div className={classes.container}>
            <Typography className={classes.title}>
              電話
            </Typography>
            <Typography className={classes.body}>
              0963-261-272
            </Typography>
          </div>
          <div className={classes.container}>
            <Typography className={classes.title}>
              Email
            </Typography>
            <Typography className={classes.body}>
              feelool007@gmail.com
            </Typography>
          </div>
          <div className={classes.container}>
            <Typography className={classes.title}>
              婚姻
            </Typography>
            <Typography className={classes.body}>
              與Carol Lin結婚
            </Typography>
          </div>
          <div className={classes.container}>
            <Typography className={classes.title}>
              兵役
            </Typography>
            <Typography className={classes.body}>
              於2017/09/08退伍
            </Typography>
          </div>
        </CardContent>
      </Card>
    );
  };
}

export default withStyles(styles)(ProfileCard);
