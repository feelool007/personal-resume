import { createStyles, Theme } from "@material-ui/core";

export default (theme: Theme) => createStyles({
  navItem: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    color: "#616161",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: 18,
    transition: "color .15s ease-in",
    "&:hover": {
      color: "#039be5"
    }
  },
  navItemLink: {
    textDecoration: "none"
  },
  navItemActive: {
    color: "#039be5"
  },
  navBarContainer: {
    display: "flex",
    alignItems: "flex-end",
    justifyContent: "flex-end"
  },
  navBar: {
    display: "flex",
    flex: 1
  },
  navBarActions: {
    display: "flex"
  },
  navBarActionsIcon: {
    fontSize: 32,
    cursor: "pointer",
    color: "#616161",
    transition: "color .15s ease-in",
    "&:hover": {
      color: "#212121"
    },
    "&:not(first-of-type)": {
      marginLeft: theme.spacing(1.5)
    }
  },
  sidebar: {
    width: "70%",
    backgroundColor: "#272727"
  }
})
