import { WithStyles } from "@material-ui/core";

import styles from "./styles";

export type ProfileType = {
  title: string;
  body: string;
};

export interface PProfileCard extends WithStyles<typeof styles> {
  data: Array<ProfileType>;
}
