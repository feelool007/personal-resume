import { createStyles, Theme } from "@material-ui/core";

export default (theme: Theme) => createStyles({
  wrapper: {
    backgroundColor: "#eae5e5",
    display: "flex",
    flexDirection: "column",
    minWidth: "100vw",
    minHeight: "100vh",
    overflowY: "scroll"
  },
  mainPanel: {
    flex: 1,
    paddingLeft: "15%",
    paddingRight: "15%",
    paddingTop: theme.spacing(4),
    // overflowY: "scroll",
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    height: 60,
    borderTop: "1px solid #bdbdbd",
    color: "#757575",
    paddingLeft: "15%",
    paddingRight: "15%",
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("sm")]: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2)
    }
  },
  header: {
    display: "flex",
    alignItems: "flex-end",
    height: 80,
    marginBottom: theme.spacing(4)
  },
  headerTitle: {
    marginRight: theme.spacing(8)
  },
  headerActions: {
    flex: 1
  },
  content: {
    flex: 1,
    marginBottom: theme.spacing(4)
  }
});
