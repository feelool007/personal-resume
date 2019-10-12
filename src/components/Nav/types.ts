import { WithStyles } from "@material-ui/core";
import { RouteComponentProps } from "react-router";

import styles from "./styles";
import { Path } from "../../router";

export interface PNavItem extends WithStyles<typeof styles>, Path {
  active?: boolean;
}

export interface PNavBar extends WithStyles<typeof styles>, RouteComponentProps<any> {
  paths: Array<Path>;
}

export interface SNavBar {
  sidebarOpen: boolean;
}

export interface PSidebar extends WithStyles<typeof styles>, RouteComponentProps<any> {
  open: boolean;
  paths: Array<Path>;
  onClose: () => void;
}
