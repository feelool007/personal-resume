import { createStyles, Theme } from "@material-ui/core";

export default (theme: Theme) => createStyles({
  title: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: theme.spacing(0.5)
  },
  caption: {
    fontSize: 14,
    color: "#616161",
    marginBottom: theme.spacing(0.5)
  },
  bodyContainer: {
    width: "100%",
    marginBottom: theme.spacing(1)
  },
  subtitle: {
    fontSize: 16,
    fontWeight: "bold",
    textIndent: "2em"
  },
  body: {
    fontSize: 16,
    textIndent: "2em",
    lineHeight: theme.spacing(0.25),
    textAlign: "justify"
  },
  contentContainer: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(2),
    whiteSpace: "pre-wrap",
    wordWrap: "break-word"
  },
  avatar: {
    width: 120,
    height: 120,
    backgroundColor: "#e65100",
    color: "#ffffff"
  },
  groupDivider: {
    width: "100%",
    backgroundColor: "#9e9e9e",
    height: 2,
    marginBottom: theme.spacing(2)
  },
  resumeContainer: {}
});
