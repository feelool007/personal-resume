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
        maxWidth: 240,
        maxHeight: 240
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
    },
    swipeViewContainer: {
      position: "relative",
      maxWidth: 480,
      [theme.breakpoints.down("sm")]: {
        maxWidth: 240
      },
      width: props => props.width,
      height: props => props.height
    },
    icon: {
      position: "absolute",
      fontSize: 48,
      color: "#ffffff",
      opacity: 0,
      top: `calc(50% - 0.5em)`,
      transition: ".2s opacity ease-in",
      cursor: "pointer"
    },
    iconPrev: {
      left: theme.spacing(0.5)
    },
    iconRight: {
      right: theme.spacing(0.5)
    },
    iconVisible: {
      opacity: 1
    }
  });
