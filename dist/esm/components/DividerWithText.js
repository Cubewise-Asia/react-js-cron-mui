import React from "react";
import { makeStyles } from "@material-ui/core";
const useStyles = makeStyles(theme => ({
  container: {
    display: "flex",
    alignItems: "center"
  },
  border: {
    borderBottom: "2px solid lightgray",
    width: "100%"
  },
  content: {
    paddingTop: theme.spacing(0.5),
    paddingBottom: theme.spacing(0.5),
    paddingRight: theme.spacing(2),
    paddingLeft: theme.spacing(2),
    fontWeight: 500,
    fontSize: 22,
    color: "lightgray"
  }
}));

const DividerWithText = ({
  children
}) => {
  const classes = useStyles();
  return React.createElement("div", {
    className: classes.container
  }, React.createElement("div", {
    className: classes.border
  }), React.createElement("span", {
    className: classes.content
  }, children), React.createElement("div", {
    className: classes.border
  }));
};

export default DividerWithText;