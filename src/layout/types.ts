import { WithStyles } from "@material-ui/core";
import styles from "./styles";

export interface PWrapper extends WithStyles<typeof styles> {}

export interface PFooter extends WithStyles<typeof styles> {}

export interface PMainPanel extends WithStyles<typeof styles> {}

export interface PHeader extends WithStyles<typeof styles> {}

export interface PContent extends WithStyles<typeof styles> {}

export interface PLayout {}
