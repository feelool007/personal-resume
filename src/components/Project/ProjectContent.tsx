import React from "react";
import { withStyles, Grid } from "@material-ui/core";

import { PProjectContent } from "./types";
import styles from "./styles";
import ProjectDescription from "./ProjectDescription";
import { SwipeblePictures, Picture } from "../Picture";

class ProjectContent extends React.Component<PProjectContent> {
  render = () => {
    const { content, classes } = this.props;
    return (
      <Grid container spacing={2} className={classes.content}>
        <Grid item sm={12} md={6}>
          <SwipeblePictures width="100%" height={240}>
            {content.pictures.map((d, index) => {
              return <Picture key={index} src={d} />;
            })}
          </SwipeblePictures>
        </Grid>
        <Grid item sm={12} md={6}>
          <ProjectDescription
            name={content.name}
            description={content.description}
            repositoryUrl={content.repositoryUrl}
          />
        </Grid>
      </Grid>
    );
  };
}

export default withStyles(styles)(ProjectContent);
