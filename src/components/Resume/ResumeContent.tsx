import React from "react";
import { withStyles, Typography, Grid } from "@material-ui/core";

import { PResumeContent } from "./types";
import styles from "./styles";

class ResumeContent extends React.Component<PResumeContent> {
  render = () => {
    const { data, classes } = this.props;
    return (
      <Grid id={data.id} className={classes.contentContainer}>
        <Typography className={classes.title}>{data.title}</Typography>
        {data.caption && (
          <Typography className={classes.caption}>
            {data.caption}
          </Typography>
        )}
        {data.bodys.map((b, index) => {
          return (
            <div key={index} className={classes.bodyContainer}>
              {b.subtitle && (
                <Typography className={classes.subtitle}>
                  {b.subtitle}
                </Typography>
              )}
              <Typography className={classes.body}>{b.body}</Typography>
            </div>
          );
        })}
      </Grid>
    );
  };
}

export default withStyles(styles)(ResumeContent);
