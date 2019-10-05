import { WithStyles } from "@material-ui/core";

import styles from "./styles";

export interface PPictureWithoutClasses {
  width?: string | number;
  height?: string | number;
  rounded?: boolean;
  roundRadius?: number | string;
  src: string;
  rotate?: string;
  scale?: number | string;
  offsetX?: string | number;
  offsetY?: string | number;
}

export interface PPicture extends WithStyles<typeof styles>, PPictureWithoutClasses {}
