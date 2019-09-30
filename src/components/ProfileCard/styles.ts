import { createStyles, Theme } from "@material-ui/core";

export default (theme: Theme) => createStyles({
  container: {
    margin: theme.spacing(2)
  },
  title: {
    fontSize: 20,
    fontWeight: "bold"
  },
  body: {
    fontSize: 16
  },
  card: {
    paddingTop: theme.spacing(2.5),
    paddingBottom: theme.spacing(2.5),
    paddingLeft: theme.spacing(4),
    backgroundColor: "#efebe9"
  }
});
