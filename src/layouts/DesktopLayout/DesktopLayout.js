import React from "react";
import template from "./DesktopLayout.jsx";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  content: {
    flexGrow: 1,
  },
  layout: {
    display: 'flex',
  }
})


const DesktopLayout = (props) => {
  const classes = useStyles()
  return template({ props, classes });
}

export default DesktopLayout;
