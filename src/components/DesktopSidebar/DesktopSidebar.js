import React    from "react";
import template from "./DesktopSidebar.jsx";
import { makeStyles } from '@material-ui/core/styles';
import shadows from "@material-ui/core/styles/shadows";
const drawerWidth = 240 

const useStyles = makeStyles({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    boxShadow: '0 0 2rem 0 rgba(136,152,170,.15)',
  }
});

const DesktopSidebar = (props) => {
  const classes = useStyles();
  return template(classes);
}

export default DesktopSidebar;
