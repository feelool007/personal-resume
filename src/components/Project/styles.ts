import { createStyles, Theme } from "@material-ui/core";

import { resumeStyles } from "../Resume";

export default (theme: Theme) => createStyles({
  ...resumeStyles(theme),
  icon: {
    fontSize: 22,
    cursor: "pointer",
    color: "#616161",
    transition: "color .15s ease-in",
    "&:hover": {
      color: "#212121"
    },
    marginLeft: theme.spacing(1.5)
  },
  content: {
    marginBottom: theme.spacing(2)
  }
});
