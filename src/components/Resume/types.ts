import { WithStyles } from "@material-ui/core";

import styles from "./styles";

export type ResumeContentBodyType = {
  subtitle?: string;
  body: string;
};

export type ResumeContentType = {
  title: string;
  caption?: string;
  bodys: Array<ResumeContentBodyType>;
  id?: string;
};

export type ResumeContentGroupType = {
  group: string;
  contents: Array<ResumeContentType>;
};

export interface PResumeContent extends WithStyles<typeof styles> {
  data: ResumeContentType;
}

export interface PResumeContentGroup extends WithStyles<typeof styles> {
  data: ResumeContentGroupType;
}

export interface PResumeContainer extends WithStyles<typeof styles> {
  data: Array<ResumeContentGroupType>;
}
