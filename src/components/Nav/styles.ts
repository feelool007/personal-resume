import { createStyles, Theme } from "@material-ui/core";

export default (theme: Theme) => createStyles({
  navItem: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    color: "#616161",
    cursor: "pointer",
    fontWeight: "bold",
    fontSize: 18,
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
  navBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "flex-end"
  }
})
