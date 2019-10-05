import { createStyles, Theme } from "@material-ui/core";

import { PPictureWithoutClasses } from "./types";

export default (theme: Theme) =>
  createStyles({
    container: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      height: "100%",
      overflow: "hidden",
      maxWidth: 480,
      maxHeight: 480,
      [theme.breakpoints.down("sm")]: {
        maxWidth: 220,
        maxHeight: 220
      }
    },
    // Adapting based on props, ref to https://material-ui.com/styles/basics/#adapting-based-on-props
    cardMedia: {
      width: (props: PPictureWithoutClasses) => props.width,
      height: (props: PPictureWithoutClasses) => props.height,
      clipPath: (props: PPictureWithoutClasses) =>
        props.rounded
          ? `circle(${props.roundRadius} at ${props.offsetX} ${props.offsetY})`
          : undefined,
      transform: (props: PPictureWithoutClasses) =>
        `scale(${props.scale}) rotate(${props.rotate}) ${
          props.rounded
            ? `translate(calc(50% - ${props.offsetX}), calc(50% - ${props.offsetY}))`
            : `translate(${props.offsetX}, ${props.offsetY})`
        }`,
      backgroundImage: (props: PPictureWithoutClasses) => `url(${props.src})`,
      backgroundSize: "cover"
    }
  });
