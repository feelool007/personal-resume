import { WithStyles } from "@material-ui/core";

import styles from "./styles";

export type ProjectType = {
  pictures: Array<string>;
  name?: string;
  description?: string;
  repositoryUrl?: string;
};

export interface PProjectDescription extends WithStyles<typeof styles> {
  name?: string;
  description?: string;
  repositoryUrl?: string;
}

export interface PProjectContent extends WithStyles<typeof styles> {
  content: ProjectType;
}

export interface PProjectContainer extends WithStyles<typeof styles> {
  contents: Array<ProjectType>;
}
