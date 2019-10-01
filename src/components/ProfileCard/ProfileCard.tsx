import React from "react";
import { withStyles, Card, CardContent, Typography } from "@material-ui/core";

import { PProfileCard } from "./types";
import styles from "./styles";

class ProfileCard extends React.Component<PProfileCard> {
  static defaultProps = {
    data: []
  };

  render = () => {
    const { data, classes } = this.props;
    return (
      <Card className={classes.card}>
        <CardContent>
          {data.map((d, index) => {
            return (
              <div key={index} className={classes.container}>
                <Typography className={classes.title}>{d.title}</Typography>
                <Typography className={classes.body}>{d.body}</Typography>
              </div>
            );
          })}
        </CardContent>
      </Card>
    );
  };
}

export default withStyles(styles)(ProfileCard);
